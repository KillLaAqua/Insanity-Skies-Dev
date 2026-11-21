GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('large_composter', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('create:brass_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ABCBA', 'ABCBA', ' BBB ') 
            .aisle('BBBBB', 'B   B', 'B   B', 'B A B') 
            .aisle('BBBBB', 'C D C', 'C D C', 'BAAAB') 
            .aisle('BBBBB', 'B   B', 'B   B', 'B A B') 
            .aisle('AB@BA', 'ABCBA', 'ABCBA', ' BBB ') 
            .where('A', Predicates.blocks('gtceu:wrought_iron_frame'))
            .where('B', Predicates.blocks('create:brass_casing'))
            .where('C', Predicates.blocks('gtceu:tempered_glass'))
            .where(' ', Predicates.any())
            .where('D', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});