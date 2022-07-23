function create_post(e) {
    const temp = document.getElementById("create_template");
    var clon = temp.content.cloneNode(true);
    const dialog_place = document.getElementById("dialog_place");
    dialog_place.appendChild(clon);

    const save = document.getElementById("create_save");
    const cancel = document.getElementById("create_cancel");

    save.addEventListener('click', () => {
        const title = document.getElementById("title");
        const date = document.getElementById("date");
        const summary = document.getElementById("summary");

        const container = document.getElementById("container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = `${title.value} (${date.value}): ${summary.value}`;

        const edit_button = document.createElement("button");
        edit_button.type = "button";
        edit_button.innerHTML = "Edit";
        const delete_button = document.createElement("button");
        delete_button.type = "button";
        delete_button.innerHTML = "Delete";

        edit_button.addEventListener('click', () => {
            const temp = document.getElementById("create_template");
            var clon = temp.content.cloneNode(true);
            const dialog_place = document.getElementById("dialog_place");
            dialog_place.appendChild(clon);

            const save = document.getElementById("create_save");
            const cancel = document.getElementById("create_cancel");

            save.addEventListener('click', () => {
                const title = document.getElementById("title");
                const date = document.getElementById("date");
                const summary = document.getElementById("summary");

                p.innerHTML = `${title.value} (${date.value}): ${summary.value}`;
                const create_div = document.getElementById("create_div");
                create_div.remove();
            });

            cancel.addEventListener('click', () => {
                const create_div = document.getElementById("create_div");
                create_div.remove();
            });
        });

        delete_button.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(p);
        li.appendChild(edit_button);
        li.appendChild(delete_button);
        container.appendChild(li);

        const create_div = document.getElementById("create_div");
        create_div.remove();
    });

    cancel.addEventListener('click', () => {
        const create_div = document.getElementById("create_div");
        create_div.remove();
    });

    e.preventDefault();
}

function post_constructor(title, date, summary) {
    const container = document.getElementById("container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = `${title} (${date}): ${summary}`;

    const edit_button = document.createElement("button");
    edit_button.type = "button";
    edit_button.innerHTML = "Edit";
    const delete_button = document.createElement("button");
    delete_button.type = "button";
    delete_button.innerHTML = "Delete";

    edit_button.addEventListener('click', () => {
        const temp = document.getElementById("create_template");
        var clon = temp.content.cloneNode(true);
        const dialog_place = document.getElementById("dialog_place");
        dialog_place.appendChild(clon);

        const save = document.getElementById("create_save");
        const cancel = document.getElementById("create_cancel");

        save.addEventListener('click', () => {
            const title = document.getElementById("title");
            const date = document.getElementById("date");
            const summary = document.getElementById("summary");

            p.innerHTML = `${title.value} (${date.value}): ${summary.value}`;
            const create_div = document.getElementById("create_div");
            create_div.remove();
        });

        cancel.addEventListener('click', () => {
            const create_div = document.getElementById("create_div");
            create_div.remove();
        });
    });

    delete_button.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(p);
    li.appendChild(edit_button);
    li.appendChild(delete_button);
    container.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
    const create = document.getElementById("create_button");

    create.addEventListener('click', create_post);
    post_constructor("Post1", "1-1-2022", "This is my first post!");
    post_constructor("Post Title", "1-2-2022", "This is my second post! This is a summary with 1-2 sentences.");
    post_constructor("How are you????", "3-3-2022", "Hello World!");
});