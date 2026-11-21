StartupEvents.registry('block', (event) => {
    // Extras
    event
        .create('meshblock')
        .hardness(2)
        .resistance(2)
        .soundType('wood')
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .transparent(true)
        .defaultTranslucent()
        .requiresTool(true)
        .noValidSpawns(true)
        .textureAll('kubejs:block/misc/meshblock');

    event
        .create('primitive_heat_escape_casing', 'gtceu:active')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .noValidSpawns(true)
        .bloom('kubejs:block/misc/primitive_heat_escape');

});
