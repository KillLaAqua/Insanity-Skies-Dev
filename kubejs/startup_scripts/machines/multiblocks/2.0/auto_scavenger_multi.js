GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('auto_scavenger_multi', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('create:brass_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAA', 'AAAAA', 'AAAAA') 
            .aisle('AAAAA', 'ABBBA', 'ACCCA') 
            .aisle('AAAAA', 'AA@AA', 'AAAAA') 
            .where('A', Predicates.blocks('create:brass_casing'))
            .where('B', Predicates.blocks('minecraft:coarse_dirt'))
            .where('C', Predicates.blocks('kubejs:meshblock'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});