GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_steam_forge', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('A B A', 'ABBBA', 'ABBBA', ' BBB ', '  B  ', '     ', '     ') 
            .aisle(' CDC ', 'B   B', 'B   B', 'BB BB', ' BBB ', ' BBB ', '  B  ') 
            .aisle('BDDDB', 'B   B', 'B   B', 'B   B', 'BB BB', ' B B ', ' BBB ') 
            .aisle(' CDC ', 'B   B', 'B   B', 'BB BB', ' BBB ', ' BBB ', '  B  ') 
            .aisle('A B A', 'ABBBA', 'AB@BA', ' BBB ', '  B  ', '     ', '     ') 
            .where('A', Predicates.blocks('gtceu:cast_iron_frame'))
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('kubejs:high_steam_machine_casing'))
            .where('C', Predicates.blocks('kubejs:primitive_heat_escape_casing'))
            .where('D', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
