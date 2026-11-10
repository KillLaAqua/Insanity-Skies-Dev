StartupEvents.registry('block', (event) => {

    event
        .create(`crucible_stage_0`)
        .hardness(1)
        .resistance(2)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:needs_iron_tool');

    ['1', '2', '3'].forEach((num) => {
        event
            .create(`crucible_stage_${num}`)
            .hardness(1)
            .resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:needs_stone_tool');

        event
            .create(`crafting_stage_${num}`)
            .hardness(1)
            .resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:needs_stone_tool');
    });

});
