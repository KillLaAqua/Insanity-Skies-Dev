GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_steam_pof', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   B   B   ', '   B   B   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('    CDC    ', '    EEE    ', '    EEE    ', '     E     ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('B DDCCCDD B', 'B EEFFFEE B', '  EE   EE  ', '   EEEEE   ', '    EEE    ', '     E     ', '           ', '           ', '           ') 
            .aisle(' CCCCDCCCC ', ' EGGF FGGE ', ' E       E ', '  E     E  ', '  EEE EEE  ', '   EEEEE   ', '   EEEEE   ', '    E E    ', '    C C    ') 
            .aisle(' DCCCDCCCD ', ' EGGF FGGE ', ' E       E ', ' EE     EE ', '  E     E  ', '  EE E EE  ', '   E E E   ', '   E E E   ', '   C C C   ') 
            .aisle(' CCCCDCCCC ', ' EGGF FGGE ', ' E       E ', '  E     E  ', '  EEE EEE  ', '   EEEEE   ', '   EEEEE   ', '    E E    ', '    C C    ') 
            .aisle('B DDCCCDD B', 'B EEFFFEE B', '  EE   EE  ', '   EEEEE   ', '    EEE    ', '     E     ', '           ', '           ', '           ') 
            .aisle('    CDC    ', '    E@E    ', '    EEE    ', '     E     ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('   B   B   ', '   B   B   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:cast_iron_frame'))
            .where('C', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('D', Predicates.blocks('kubejs:primitive_heat_escape_casing'))
            .where('E', Predicates.blocks('kubejs:high_steam_machine_casing'))
            .where('F', Predicates.blocks('kubejs:meshblock'))
            .where('G', Predicates.blocks('minecraft:water'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});