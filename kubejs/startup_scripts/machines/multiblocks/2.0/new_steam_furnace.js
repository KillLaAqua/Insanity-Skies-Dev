GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_steam_furnace', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('gtceu:steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ACCCA', ' CCC ') 
            .aisle('BCCCB', 'C D C', 'ACCCA') 
            .aisle('BCCCB', 'C D C', 'ACDCA') 
            .aisle('BCCCB', 'C D C', 'ACCCA') 
            .aisle('ABBBA', 'AC@CA', ' CCC ') 
            .where('A', Predicates.blocks('gtceu:bronze_frame'))
            .where('B', Predicates.blocks('gtceu:bronze_firebox_casing'))
            .where('C', Predicates.blocks('gtceu:steam_machine_casing'))
            .where(' ', Predicates.any())
            .where('D', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
