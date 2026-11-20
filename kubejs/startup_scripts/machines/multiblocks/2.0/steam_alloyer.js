GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('steam_alloyer', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ACCCA', ' CCC ', '     ') 
            .aisle('BCCCB', 'C D C', 'ACDCA', '  D  ') 
            .aisle('BCCCB', 'C D C', 'ACCCA', '     ') 
            .aisle('BCCCB', 'C D C', 'ACDCA', '  D  ') 
            .aisle('ABBBA', 'AC@CA', ' CCC ', '     ') 
            .where('A', Predicates.blocks('gtceu:steel_frame'))
            .where('B', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('C', Predicates.blocks('kubejs:high_steam_machine_casing'))
            .where(' ', Predicates.any())
            .where('D', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
