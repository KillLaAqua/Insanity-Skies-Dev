GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('steam_liquifier', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('gtceu:industrial_steam_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('A     A', 'A BBB A', 'ABBCBBA', ' BCCCB ', ' BBCBB ', '  BBB  ', '       ') 
            .aisle('  BBB  ', ' BDDDB ', 'BD   DB', 'BD   DB', 'BD   DB', ' BDDDB ', '  BBB  ') 
            .aisle(' BBBBB ', 'BDA ADB', 'B     B', 'C     C', 'B     B', 'BD   DB', ' BBCBB ') 
            .aisle(' BBBBB ', 'BD   DB', 'C     C', 'C     C', 'C     C', 'BD   DB', ' BCCCB ') 
            .aisle(' BBBBB ', 'BDA ADB', 'B     B', 'C     C', 'B     B', 'BD   DB', ' BBCBB ') 
            .aisle('  BBB  ', ' BDDDB ', 'BD   DB', 'BD   DB', 'BD   DB', ' BDDDB ', '  BBB  ') 
            .aisle('A     A', 'A B@B A', 'ABBCBBA', ' BCCCB ', ' BBCBB ', '  BBB  ', '       ') 
            .where('A', Predicates.blocks('gtceu:bronze_frame'))
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:industrial_steam_casing'))
            .where('C', Predicates.blocks('gtceu:tempered_glass'))
            .where('D', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});