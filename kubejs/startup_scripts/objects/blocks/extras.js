StartupEvents.registry('block', (event) => {
    // Extras
    event
        .create('meshblock')
        .hardness(2)
        .resistance(2)
        .soundType('wood')
        .transparent(true)
        .defaultTranslucent()
        .requiresTool(true)
        .noValidSpawns(true)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/misc/meshblock');

});
