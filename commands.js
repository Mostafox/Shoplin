const {menus} = require('./menus');

const commands = {
    menu: async (ctx) => menus.main(ctx),
    products: async (ctx) => menus.inventory(ctx),
}

exports.commands = commands;