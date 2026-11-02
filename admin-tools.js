(function () {
    'use strict';

    const ADMIN_EMAIL = 'justin.mo313@education.nsw.gov.au';
    const ACCOUNTS_KEY = 'noobish-procyon-accounts';
    const CURRENT_ACCOUNT_KEY = 'noobish-procyon-current-account';
    const tools = [];
    let panel;
    let status;
    let toolList;

    function isAdmin() {
        try {
            const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
            const currentId = localStorage.getItem(CURRENT_ACCOUNT_KEY);
            return Array.isArray(accounts) && accounts.some((account) =>
                account && account.id === currentId &&
                typeof account.email === 'string' &&
                account.email.trim().toLowerCase() === ADMIN_EMAIL
            );
        } catch (error) {
            console.error('Unable to verify the current account for admin tools.', error);
            return false;
        }
    }

    function setStatus(message, isError) {
        status.textContent = message;
        status.dataset.error = isError ? 'true' : 'false';
    }

    function renderTools() {
        toolList.replaceChildren();

        if (!tools.length) {
            const empty = document.createElement('p');
            empty.className = 'np-admin-empty';
            empty.textContent = 'No progression tools are registered for this game yet.';
            toolList.appendChild(empty);
            return;
        }

        tools.forEach((tool) => {
            const form = document.createElement('form');
            form.className = 'np-admin-tool';
            const title = document.createElement('h3');
            title.textContent = tool.title;
            form.appendChild(title);

            if (tool.description) {
                const description = document.createElement('p');
                description.textContent = tool.description;
                form.appendChild(description);
            }

            const fields = tool.fields || [];
            fields.forEach((field) => {
                const label = document.createElement('label');
                label.textContent = field.label;
                const input = document.createElement('input');
                input.name = field.name;
                input.type = field.type || 'number';
                if (field.min !== undefined) input.min = String(field.min);
                if (field.max !== undefined) input.max = String(field.max);
                if (field.step !== undefined) input.step = String(field.step);
                if (field.value !== undefined) input.value = String(field.value);
                if (field.required !== false) input.required = true;
                label.appendChild(input);
                form.appendChild(label);
            });

            const submit = document.createElement('button');
            submit.type = 'submit';
            submit.textContent = tool.buttonLabel || 'Apply';
            form.appendChild(submit);
            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                if (!isAdmin()) {
                    refreshAuthorization();
                    setStatus('Admin access is no longer active.', true);
                    return;
                }

                const values = {};
                fields.forEach((field) => {
                    const input = form.elements.namedItem(field.name);
                    values[field.name] = field.type === 'text' ? input.value.trim() : Number(input.value);
                });

                submit.disabled = true;
                try {
                    const result = await tool.apply(values);
                    setStatus(typeof result === 'string' ? result : `${tool.title} applied.`, false);
                } catch (error) {
                    console.error(`Admin tool "${tool.title}" failed.`, error);
                    setStatus(error instanceof Error ? error.message : 'The admin tool could not be applied.', true);
                } finally {
                    submit.disabled = false;
                }
            });
            toolList.appendChild(form);
        });
    }

    function refreshAuthorization() {
        const authorized = isAdmin();
        document.getElementById('np-admin-toggle').hidden = !authorized;
        if (!authorized && panel) {
            panel.hidden = true;
        }
    }

    function mount() {
        const style = document.createElement('style');
        style.textContent = `
            #np-admin-toggle{position:fixed;right:16px;bottom:16px;z-index:10001;border:1px solid #e8c66c;border-radius:999px;padding:10px 15px;background:#1a2030;color:#ffe7a0;font:700 13px "Trebuchet MS",sans-serif;box-shadow:0 6px 24px #0005;cursor:pointer}
            #np-admin-panel{position:fixed;inset:0 0 0 auto;z-index:10002;width:min(420px,100%);overflow:auto;padding:20px;background:#111827;color:#eef2ff;font:14px "Trebuchet MS",sans-serif;box-shadow:-12px 0 40px #0008}
            #np-admin-panel[hidden],#np-admin-toggle[hidden]{display:none}
            .np-admin-header{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid #334155;padding-bottom:14px;margin-bottom:12px}
            .np-admin-header h2{margin:0;color:#ffe7a0;font-size:19px}
            .np-admin-header button,.np-admin-tool button{border:0;border-radius:8px;padding:9px 12px;background:#e8c66c;color:#182033;font-weight:700;cursor:pointer}
            .np-admin-warning{padding:10px;border:1px solid #8a6e31;border-radius:8px;background:#332a16;color:#ffe7a0;line-height:1.45}
            .np-admin-tool{padding:14px 0;border-bottom:1px solid #334155}
            .np-admin-tool h3{margin:0 0 6px;font-size:16px}
            .np-admin-tool p,.np-admin-empty{color:#bac4d7;line-height:1.45}
            .np-admin-tool label{display:block;margin:10px 0;color:#d9e1ef}
            .np-admin-tool input{display:block;width:100%;margin-top:5px;padding:9px;border:1px solid #536078;border-radius:7px;background:#0b1220;color:#fff;font:inherit}
            .np-admin-status{min-height:20px;color:#a7f3d0}
            .np-admin-status[data-error="true"]{color:#fca5a5}
        `;
        document.head.appendChild(style);

        const toggle = document.createElement('button');
        toggle.id = 'np-admin-toggle';
        toggle.type = 'button';
        toggle.textContent = 'Admin tools';
        toggle.hidden = true;
        toggle.setAttribute('aria-controls', 'np-admin-panel');
        toggle.addEventListener('click', () => {
            panel.hidden = !panel.hidden;
        });

        panel = document.createElement('aside');
        panel.id = 'np-admin-panel';
        panel.hidden = true;
        panel.setAttribute('aria-label', 'Admin tools');
        panel.innerHTML = `
            <header class="np-admin-header"><h2>Admin tools</h2><button type="button" aria-label="Close admin tools">Close</button></header>
            <p class="np-admin-warning">Admin tools modify this browser's saved game data. This static-site account system is client-side only and is not secure authentication.</p>
            <p class="np-admin-status" role="status" aria-live="polite"></p>
            <div class="np-admin-list"></div>
        `;
        panel.querySelector('header button').addEventListener('click', () => {
            panel.hidden = true;
        });
        status = panel.querySelector('.np-admin-status');
        toolList = panel.querySelector('.np-admin-list');
        document.body.append(toggle, panel);
        renderTools();
        refreshAuthorization();
        window.addEventListener('storage', refreshAuthorization);
    }

    window.NoobishAdmin = Object.freeze({
        registerTool(tool) {
            if (!tool || typeof tool.id !== 'string' || typeof tool.title !== 'string' ||
                typeof tool.apply !== 'function' || tools.some((entry) => entry.id === tool.id)) {
                throw new TypeError('Admin tools require a unique id, title, and apply function.');
            }
            tools.push(tool);
            if (toolList) renderTools();
        },
        isAdmin
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount, { once: true });
    } else {
        mount();
    }
})();
