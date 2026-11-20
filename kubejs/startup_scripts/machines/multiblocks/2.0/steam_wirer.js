GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('steam_wirer', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BCCCB ', '  CCC  ', '   C   ') 
            .aisle('CCCCCCC', 'CCCDCCC', ' CCCCC ') 
            .aisle('ECCCCCE', 'CDDFDDC', 'CCCCCCC') 
            .aisle('CCCCCCC', 'CCCDCCC', ' CCCCC ') 
            .aisle(' BCCCB ', '  C@C  ', '   C   ') 
            .where('B', Predicates.blocks('gtceu:cast_iron_frame'))
            .where('C', Predicates.blocks('kubejs:high_steam_machine_casing'))
            .where(' ', Predicates.any())
            .where('D', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('E', Predicates.blocks('kubejs:primitive_heat_escape_casing'))
            .where('F', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
