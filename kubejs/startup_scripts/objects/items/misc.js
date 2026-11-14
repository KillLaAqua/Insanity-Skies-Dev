StartupEvents.registry('item', (event) => {
    // === Primitive Age ===
    event.create('flint_shard').texture(`kubejs:item/hm/pre-lv/flint_shard`);

    event.create('packed_mud_ball').texture(`kubejs:item/hm/pre-lv/packed_mud_ball`);

    event.create('mud_brick').texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

    event.create('stone_brick').texture(`kubejs:item/hm/pre-lv/stone_brick`);

    event.create('charcoal_pellet').burnTime(720).texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

    event.create('concrete_bowl').maxStackSize(4).texture(`kubejs:item/hm/pre-lv/concrete_bowl`);

    event.create('water_bowl').maxStackSize(4).texture(`kubejs:item/hm/pre-lv/water_bowl`);

    event.create('canvas').texture(`kubejs:item/hm/pre-lv/canvas`);

    event.create('igneous_construct').texture(`kubejs:item/hm/pre-lv/igneous_construct`);

    // === Incomplete parts ===
    [
        'long_rod','double_plate','gear','small_gear',
        'rotor','spring','small_spring','single_wire',
        'fine_wire','fluid_pipe','item_pipe',
    ].forEach((id) => {
        event.create(`incomplete_${id}`).maxStackSize(64).texture(`kubejs:item/hm/incomplete_parts/incomplete_${id}`);
    });

    // === Tools ===
    event
        .create('basic_scavenging_rod')
        .maxDamage(256)
        .unstackable()
        .texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

    event
        .create('scavenging_rod')
        .maxDamage(512)
        .unstackable()
        .texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

    event
        .create(`ulv_emitter`)
        .texture(`kubejs:item/hm/pre-lv/ulv_emitter`);

    // === Ceramic Molds
    ['ingot', 'ball', 'raw'].forEach(
        (ceramic) => {
        event
            .create(`unfired_${ceramic}_ceramic_casting_mold`)
            .texture(`kubejs:item/hm/pre-lv/unfired_${ceramic}_ceramic_casting_mold`);
        if (ceramic !== 'raw')
        event
            .create(`${ceramic}_ceramic_casting_mold`)
            .texture(`kubejs:item/hm/pre-lv/${ceramic}_ceramic_casting_mold`);
        }
    );

});
