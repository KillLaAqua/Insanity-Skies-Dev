GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_pof', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('gtceu:firebricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BCDCB ', ' BCCCB ', '  CCC  ', '   C   ', '   C   ', '       ', '       ', '       ') 
            .aisle('CCCCCCC', 'CCE ECC', ' C   C ', ' CC CC ', '  CCC  ', '  CCC  ', '   C   ', '   F   ') 
            .aisle('DCCCCCD', 'CE G EC', 'C     C', ' C   C ', ' C   C ', '  C C  ', '  C C  ', '  F F  ') 
            .aisle('CCCCCCC', 'CCE ECC', ' C   C ', ' CC CC ', '  CCC  ', '  CCC  ', '   C   ', '   F   ') 
            .aisle(' BCDCB ', ' BC@CB ', '  CCC  ', '   C   ', '   C   ', '       ', '       ', '       ') 
            .where('B', Predicates.blocks('gtceu:bronze_frame'))
            .where('C', Predicates.blocks('gtceu:firebricks'))
            .where('D', Predicates.blocks('gtceu:bronze_firebox_casing'))
            .where(' ', Predicates.any())
            .where('E', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('F', Predicates.blocks('gtceu:bronze_machine_casing'))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});