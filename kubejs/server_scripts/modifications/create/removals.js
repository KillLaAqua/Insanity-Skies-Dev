ServerEvents.recipes((event) => {
    const id = global.id;

    // Removals
    const CreateRemoval = [
		'windmill_bearing', 'spout', 'fluid_pipe', 'chute', 'depot', 'basin', 'mechanical_mixer', 'mechanical_press', 'hand_crank', 'millstone',
		'crushing_wheel', 'smart_chute', 'fluid_tank', 'steam_engine', 'piston_extension_pole', 'mechanical_bearing', 'clockwork_bearing', 'weighted_ejector',
		'encased_fan', 'large_water_wheel', 'encased_chain_drive', 'gearshift', 'gantry_shaft', 'gantry_carriage', 'mechanical_drill', 'sticker', 'mechanical_saw',
		'deployer', 'andesite_casing', 'brass_casing', 'mechanical_crafter', 'copper_casing', 'sequenced_gearshift', 'nozzle', 'adjustable_chain_gearshift', 'water_wheel',
		'andesite_funnel', 'mechanical_arm', 'item_vault', 'flywheel', 'brass_hand', 'whisk', 'propeller', 'electron_tube', 'rotation_speed_controller', 'brass_tunnel',
		'andesite_tunnel', 'brass_funnel', 'white_sail', 'wrench', 'hose_pulley', 'transmitter', 'pulp', 'cardboard', 'item_hatch', 'elevator_pulley', 'redstone_contact',
		'schematicannon', 'display_board', 'chain_conveyor', 'redstone_link', 'package_frogport', 'display_link', 'packager', 'repackager', 'brown_toolbox'
	];
    CreateRemoval.forEach((item) => {
        event.remove({ output: `create:${item}` });
    });
    const CreateIDRemoval = [
        'crafting/logistics/stock_link',
        'crafting/logistics/stock_ticker',
        'crafting/logistics/redstone_requester',
        'crafting/logistics/factory_gauge',
        'milling/gravel',
    ];
    CreateIDRemoval.forEach((item) => {
        event.remove({ id: `create:${item}` });
    });
    const CNA = [
        'layered_magnet','fluxuated_magnetite','basic_energiser','advanced_energiser','reinforced_energiser',
        'electrical_connector','generator_coil','basic_motor','advanced_motor','reinforced_motor',
    ];
    CNA.forEach((removal) => {
        event.remove({ output: `create_new_age:${removal}` });
    });
    
});
