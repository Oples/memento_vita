// svelte store
import { Builder } from "builder-pattern";
import { writable, get } from "svelte/store";

// {
//     "groups": {
//         "updated_at": "2021-05-20T16:20:19.000000Z",
//         "__auto_increment_key__": 1,
//         "__default__": {
//           "rules": [],
//           "id": "__default__",
//           "name": "Default",
//           "description": "Default group",
//           "is_system": true,
//           "is_deleted": false,
//           "created_at": "2021-05-20T16:20:19.000000Z",
//           "updated_at": "2021-05-20T16:20:19.000000Z",
//           "__auto_increment_key__": 1,
//           "links": []
//         },
//         "list": [
//           {
//             "rules": ["/amazonaws.com/"],
//             "id": "0",
//             "name": "Amazon links",
//             "description": "Amazon links group",
//             "is_system": false,
//             "is_deleted": false,
//             "created_at": "2021-05-20T16:20:19.000000Z",
//             "updated_at": "2021-05-20T16:20:19.000000Z",
//             "__auto_increment_key__": 1,
//             "links": [
//               {
//                   "name": "Amazon Web Services",
//                   "description": "Amazon Web Services",
//                   "url": "https://aws.amazon.com/",
//                   "is_deleted": false,
//                   "created_at": "2021-05-20T16:20:19.000000Z",
//                   "updated_at": "2021-05-20T16:20:19.000000Z",
//                   "update_interval": 86400000,
//                   "notes": "",
//                   "price": 220.0,
//                   "unit": "USD",
//                   "image": null,
//                   "favicon": null,
//                   "favorite": false
//               }
//             ]
//           }
//         ]
//     }
// }

export interface Base {
    name: string;
    is_system: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface Link extends Base {
    id: number;
    description?: string;
    url: string;
    favicon?: string;
    image?: string;
    update_interval?: number;
    notes?: string;
    price?: number;
}

export class Group implements Base {
    id: string = "";
    name: string = "";
    description: string = "";
    rules: string[] = [];
    links: Link[] = [];
    is_system: boolean = false;
    is_deleted: boolean = false;
    created_at: Date = new Date();
    updated_at: Date = new Date();
    image: string = "";
    color: string = "#" + Math.random().toString(16).slice(2, 8);
    __auto_increment_key__: number = 1;
}

export class Model {
    created_at: Date = new Date();
    updated_at: Date = new Date();
    __auto_increment_key__: number = 1;
    __default__: Group = Builder(Group)
        .id("__default__")
        .name("Default")
        .is_system(true)
        .build();
    list: Group[] = [];
}

export const defaultModel = {
    model: new Model(),
};

export const loadModel: () => Partial<Model> | undefined = () => {
    const stored = localStorage.getItem("model");
    if (stored) {
        return JSON.parse(stored) as Partial<Model>;
    }
};

export function getStoredModel() {
    let stored_model = loadModel();
    console.log("stored_model", stored_model);
    return {
        model: stored_model
            ? (stored_model as { model: Model }).model
            : new Model(),
    };
}

export const model = writable(getStoredModel());

export function add_group(group: Group) {
    model.update((value) => {
        group.id = String(value.model.__auto_increment_key__++);
        value.model.list.push(group);
        return value;
    });
}

export function remove_group(id: number) {
    model.update((value) => {
        value.model.list = value.model.list.filter(
            (group) => group.id !== String(id)
        );
        return value;
    });
}

export function update_group(id: number, group: Group) {
    model.update((value) => {
        value.model.list = value.model.list.map((g) => {
            if (g.id === String(id)) {
                return group;
            }
            return g;
        });
        return value;
    });
}

export function add_link(group_id: string, link: Link) {
    model.update((value) => {
        value.model.list = value.model.list.map((g) => {
            if (g.id === String(group_id)) {
                g.links.push(link);
            }
            return g;
        });
        return value;
    });
}

export function remove_link(group_id: string, id: number) {
    model.update((value) => {
        value.model.list = value.model.list.map((g) => {
            if (g.id === String(group_id)) {
                g.links = g.links.filter((l) => l.id !== id);
            }
            return g;
        });
        return value;
    });
}

export function update_link(group_id: string, id: number, link: Link) {
    model.update((value) => {
        value.model.list = value.model.list.map((g) => {
            if (g.id === String(group_id)) {
                g.links = g.links.map((l) => {
                    if (l.id === id) {
                        return link;
                    }
                    return l;
                });
            }
            return g;
        });
        return value;
    });
}

model.subscribe((value) => {
    // persist
    localStorage.setItem("model", JSON.stringify(value));
});
