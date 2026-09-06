ServerEvents.recipes((event) => {
    const id = global.id;

    const plate = (metal) => `gtceu:${metal}_plate`;
    const rod = (metal) => `gtceu:${metal}_rod`;

    // Metallurgy Rework via Create

    event.remove({ id: /^create:pressing.*_ingot/ });
    event.remove({ output: /^create_new_age.*wire/ });

    const minecraft_metals = ['iron', 'copper', 'gold'];

    const plates = ['iron', 'copper', 'gold','lead', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy', 'damascus_steel'];
	const plates_block = ['iron', 'copper', 'lead'];
	const rods = ['iron', 'copper', 'gold','lead', 'tin', 'zinc', 'bronze', 'brass', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy', 'damascus_steel'];
	const rings = ['iron', 'copper', 'gold','lead', 'tin', 'zinc', 'bronze', 'brass', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel', 'wrought_iron', 'cast_iron', 'steel'];
	const foils = ['iron', 'copper', 'gold','lead', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
	const screws_and_bolts = ['iron', 'copper', 'gold','lead', 'tin', 'bronze', 'brass', 'pig_iron', 'tin_alloy', 'potin', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy', 'damascus_steel'];
	const long_rods = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
	const double_plates = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
	const gears = ['iron', 'lead', 'bronze', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'potin', 'damascus_steel'];
	const small_gears = ['iron', 'lead', 'bronze', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'potin', 'damascus_steel'];
	const rotors = ['iron', 'copper', 'lead', 'bronze', 'pig_iron', 'steel', 'cast_iron','tin_alloy'];
	const springs = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
	const small_springs = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel'];
	const wires = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
	const fine_wires = ['copper', 'gold', 'lead', 'tin', 'zinc', 'steel', 'red_alloy'];
	const fluid_pipes = ['copper', 'steel', 'lead', 'bronze', 'tin_alloy', 'potin'];
	const item_pipes = ['tin', 'brass', 'cupronickel', 'nickel'];

    const seq_assembly = (output, input, inter, sequence, loops) => {
        const steps = sequence.map((step) => {
            let result;

            if (step == 'cut') result = event.recipes.createCutting(inter, inter);
            if (step == 'press') result = event.recipes.createPressing(inter, inter);
            if (Array.isArray(step)) {
                const [type, fluitem] = step;

                if (type == 'fill') result = event.recipes.createFilling(inter, [inter, fluitem]);
                if (type == 'deploy') result = event.recipes.createDeploying(inter, [inter, fluitem]);
            }

            return result;
        });

        event.recipes.create
            .sequenced_assembly(output, input, steps)
            .transitionalItem(inter)
            .loops(loops)
            .id(`insanity_skies:sequenced_assembly/${output.split(':')[1]}`);
    };

    plates.forEach((metal) => {
        let mod = minecraft_metals.includes(metal) ? 'minecraft' : 'gtceu';
        event.recipes.create.compacting(plate(metal), `2x ${mod}:${metal}_ingot`).id(`insanity_skies:compacting/${metal}_plate`);
    });

    plates_block.forEach((metal) => {
        let mod = minecraft_metals.includes(metal) ? 'minecraft' : 'gtceu';
        event
            .shaped(`1x gtceu:${metal}_plate`, [
                ' I ', 
                'HI ', 
                ' I '
            ], {
                I: `${mod}:${metal}_ingot`,
                H: '#forge:tools/hammers',
            })
            .id(`insanity_skies:shaped/${metal}_plate`);
    });

    rods.forEach((metal) => {
        event.recipes.create.cutting([`2x gtceu:${metal}_rod`], plate(metal)).id(`insanity_skies:cutting/${metal}_rod`);
    });

    rings.forEach((metal) => {
        event.recipes.create.pressing([`gtceu:${metal}_ring`], rod(metal)).id(`insanity_skies:pressing/${metal}_ring`);
    });

    foils.forEach((metal) => {
        event.recipes.create.pressing([`gtceu:${metal}_foil`], plate(metal)).id(`insanity_skies:pressing/${metal}_foil`);
    });

    screws_and_bolts.forEach((metal) => {
        event.recipes.create.cutting([`2x gtceu:${metal}_bolt`], rod(metal)).id(`insanity_skies:cutting/${metal}_bolt`);
        event.recipes.create
            .compacting([`gtceu:${metal}_screw`], `2x gtceu:${metal}_bolt`)
            .id(`insanity_skies:compacting/${metal}_screw`);
    });

    long_rods.forEach((metal) =>
        seq_assembly(
            `gtceu:long_${metal}_rod`,
            rod(metal),
            'kubejs:incomplete_long_rod',
            [['deploy', rod(metal)], 'press'],
            1
        )
    );

    double_plates.forEach((metal) =>
        seq_assembly(
            `gtceu:double_${metal}_plate`,
            plate(metal),
            'kubejs:incomplete_double_plate',
            [['deploy', plate(metal)], 'press'],
            1
        )
    );

    small_gears.forEach((metal) =>
        seq_assembly(
            `gtceu:small_${metal}_gear`,
            plate(metal),
            'kubejs:incomplete_small_gear',
            [['deploy', rod(metal)]],
            2
        )
    );

    gears.forEach((metal) =>
        seq_assembly(
            `gtceu:${metal}_gear`,
            `gtceu:small_${metal}_gear`,
            'kubejs:incomplete_gear',
            [
                ['deploy', plate(metal)],
                ['deploy', rod(metal)],
            ],
            2
        )
    );

    rotors.forEach((metal) =>
        seq_assembly(
            `gtceu:${metal}_rotor`,
            `gtceu:${metal}_ring`,
            'kubejs:incomplete_rotor',
            [['deploy', plate(metal)], 'press', ['deploy', `gtceu:${metal}_screw`]],
            4
        )
    );

    springs.forEach((metal) =>
        seq_assembly(
            `gtceu:${metal}_spring`,
            `gtceu:long_${metal}_rod`,
            'kubejs:incomplete_spring',
            ['cut', 'press', 'press'],
            2
        )
    );

    small_springs.forEach((metal) =>
        seq_assembly(
            `2x gtceu:small_${metal}_spring`,
            `gtceu:${metal}_spring`,
            'kubejs:incomplete_small_spring',
            ['cut', 'cut', 'press'],
            2
        )
    );

    wires.forEach((metal) =>
        seq_assembly(
            `gtceu:${metal}_single_wire`,
            plate(metal),
            'kubejs:incomplete_single_wire',
            [['deploy', '#forge:tools/wire_cutters'], 'cut'],
            2
        )
    );

    fine_wires.forEach((metal) =>
        seq_assembly(
            `gtceu:fine_${metal}_wire`,
            `gtceu:${metal}_foil`,
            'kubejs:incomplete_fine_wire',
            [['deploy', '#forge:tools/wire_cutters'], 'cut'],
            2
        )
    );

    item_pipes.forEach((metal) => {
        const small = `gtceu:${metal}_small_item_pipe`;
        const normal = `gtceu:${metal}_normal_item_pipe`;
        const large = `gtceu:${metal}_large_item_pipe`;
        const huge = `gtceu:${metal}_huge_item_pipe`;

        const inter = 'kubejs:incomplete_item_pipe';
        const sequence = [['deploy', plate(metal)], 'press'];

        seq_assembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
        seq_assembly(normal, small, inter, sequence, 2);
        seq_assembly(large, normal, inter, sequence, 3);
        seq_assembly(huge, large, inter, sequence, 6);
    });

    fluid_pipes.forEach((metal) => {
        const tiny = `gtceu:${metal}_tiny_fluid_pipe`;
        const small = `gtceu:${metal}_small_fluid_pipe`;
        const normal = `gtceu:${metal}_normal_fluid_pipe`;
        const large = `gtceu:${metal}_large_fluid_pipe`;
        const huge = `gtceu:${metal}_huge_fluid_pipe`;

        const inter = 'kubejs:incomplete_fluid_pipe';
        const sequence = [['deploy', plate(metal)], 'press'];

        seq_assembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
        seq_assembly(normal, small, inter, sequence, 2);
        seq_assembly(large, normal, inter, sequence, 3);
        seq_assembly(huge, large, inter, sequence, 6);

        event.recipes.create.cutting(Item.of(tiny, 2), small).id(`insanity_skies:cutting/${metal}_tiny_fluid_pipe`);
    });

    const WoodPipe = (size, loops, start) => {
        seq_assembly(
            `gtceu:wood_${size}_fluid_pipe`,
            start,
            'kubejs:incomplete_fluid_pipe',
            [['deploy', 'gtceu:wood_plate'], ['deploy', 'gtceu:wood_screw'], 'press', 'cut'],
            loops
        );
    };

    WoodPipe('small', 1, 'gtceu:wood_plate');
    WoodPipe('normal', 2, 'gtceu:wood_small_fluid_pipe');
    WoodPipe('large', 3, 'gtceu:wood_normal_fluid_pipe');

});