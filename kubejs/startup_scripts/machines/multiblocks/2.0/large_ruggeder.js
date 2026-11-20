GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('large_ruggeder', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:reinforced_stone_bricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   B B   ', '   BCB   ', '   CCC   ', '   CCC   ', '   CCC   ', '    C    ', '         ') 
            .aisle(' B DDD B ', ' BCCCCCB ', ' BCCCCCB ', ' CCCCCCC ', ' BCCCCCB ', '  CCCCC  ', '   CCC   ') 
            .aisle('  DCDCD  ', ' CCC CCC ', ' CC   CC ', ' CC   CC ', ' CC   CC ', ' CCC CCC ', '  CCBCC  ') 
            .aisle('BDCCCCCDB', 'BCC   CCB', 'CC     CC', 'CC     CC', 'CC     CC', ' CC   CC ', ' CC B CC ') 
            .aisle(' DDCCCDD ', 'CC     CC', 'CC     CC', 'CC     CC', 'CC     CC', 'CC     CC', ' CBBBBBC ') 
            .aisle('BDCCCCCDB', 'BCC   CCB', 'CC     CC', 'CC     CC', 'CC     CC', ' CC   CC ', ' CC B CC ') 
            .aisle('  DCDCD  ', ' CCC CCC ', ' CC   CC ', ' CC   CC ', ' CC   CC ', ' CCC CCC ', '  CCBCC  ') 
            .aisle(' B DDD B ', ' BCCCCCB ', ' BCCCCCB ', ' CCCCCCC ', ' BCCCCCB ', '  CCCCC  ', '   CCC   ') 
            .aisle('   B B   ', '   BCB   ', '   CCC   ', '   C@C   ', '   CCC   ', '    C    ', '         ') 
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:cast_iron_frame'))
            .where('C', Predicates.blocks('kubejs:reinforced_stone_bricks'))
            .where('D', Predicates.blocks('kubejs:primitive_heat_escape_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});