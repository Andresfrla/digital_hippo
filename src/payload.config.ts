import { buildConfig } from "payload/config";
import { moongoseAdapter } from "mongoDB"

export default buildConfig({
    serverURL: process.env.NEXT_PUBLICK_SERVER || '',
    collections: [],
    routes: {
        admin: '/sell'
    },
    admin: {},
    editor: slateEditor({}),
    db: mongooseAdapter()
})