StartupEvents.registry('block', (event) => {
    event
        .create('high_steam_machine_casing') //to id in PA 2.0
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/basic/high_steam_machine_casing');

    event
        .create('reinforced_stone_bricks')
        .hardness(5)
        .resistance(1)
        .soundType('stone')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/hardmode/reinforced_stone_bricks');

    event
        .create('peek_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/basic/machine_casing_peek');

    event
        .create(`polycarbonate_casing`)
        .hardness(5)
        .resistance(1)
        .soundType(`metal`)
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock(`mineable/pickaxe`)
        .tagBlock(`minecraft:needs_iron_tool`)
        .textureAll(`kubejs:block/casings/basic/machine_casing_polycarbonate`);
});
