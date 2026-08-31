const damage_tool = (event) => {
    const { player, block, item, level } = event;

    if (player.creative) return;

    item.damageValue++;
    if (item.damageValue >= item.maxDamage) {
        item.count--;
        level.playSound(null, block.pos, 'minecraft:entity.item.break', 'blocks');
    }
};

BlockEvents.rightClicked('minecraft:coarse_dirt', (event) => {
    const { player, block, item, level } = event;

    const pop_up = (item, chance) => Math.random() < chance && block.popItemFromFace(item, 'up');

    const dig = () => {
        level.playSound(null, block.pos, 'minecraft:block.composter.fill', 'blocks');
        player.swing();
    };

    if (player.getMainHandItem() == null && player.getOffHandItem() == null && player.isCrouching()) {
        pop_up('kubejs:flint_shard', 0.25);
        pop_up('kubejs:flint_shard', 0.25);
        pop_up('minecraft:cookie', 0.002);
        player.addExhaustion(0.03);
        dig();
    }

    if (item.id == 'kubejs:basic_scavenging_rod') {
        pop_up('kubejs:flint_shard', 0.5);
        pop_up('minecraft:flint', 0.2);
        pop_up('kubejs:flint_shard', 0.5);
        pop_up('minecraft:flint', 0.2);
        pop_up('minecraft:cookie', 0.003);

        damage_tool(event);
        dig();
    }

    if (item.id == 'kubejs:scavenging_rod') {
        pop_up('kubejs:flint_shard', 0.5);
        pop_up('minecraft:flint', 0.5);
        pop_up('kubejs:flint_shard', 0.5);
        pop_up('minecraft:flint', 0.5);
        pop_up('exnihilosequentia:stone_pebble', 0.2);
        pop_up('minecraft:cookie', 0.004);

        damage_tool(event);
        dig();
    }
});

BlockEvents.rightClicked('minecraft:grass_block', (event) => {
    const { player, block, item, level } = event;

    const pop_up = (item, chance) => Math.random() < chance && block.popItemFromFace(item, 'up');

    const dig = () => {
        level.playSound(null, block.pos, 'minecraft:block.composter.fill', 'blocks');
        player.swing();
    };

    if (item.id == 'kubejs:basic_scavenging_rod') {
        pop_up('exnihilosequentia:stone_pebble', 0.02);
        pop_up('exnihilosequentia:andesite_pebble', 0.06);
        pop_up('exnihilosequentia:basalt_pebble', 0.06);
        pop_up('exnihilosequentia:blackstone_pebble', 0.06);
        pop_up('exnihilosequentia:deepslate_pebble', 0.06);
        pop_up('exnihilosequentia:diorite_pebble', 0.06);
        pop_up('exnihilosequentia:granite_pebble', 0.06);
        pop_up('exnihilosequentia:tuff_pebble', 0.06);
        pop_up('exnihilosequentia:calcite_pebble', 0.06);
        pop_up('exnihilosequentia:dripstone_pebble', 0.06);
        pop_up('minecraft:cookie', 0.005);
        player.addExhaustion(0.03);

        damage_tool(event);
        dig();
    }

    if (item.id == 'kubejs:scavenging_rod') {
        pop_up('exnihilosequentia:stone_pebble', 0.04);
        pop_up('exnihilosequentia:andesite_pebble', 0.1);
        pop_up('exnihilosequentia:basalt_pebble', 0.1);
        pop_up('exnihilosequentia:blackstone_pebble', 0.1);
        pop_up('exnihilosequentia:deepslate_pebble', 0.1);
        pop_up('exnihilosequentia:diorite_pebble', 0.1);
        pop_up('exnihilosequentia:granite_pebble', 0.1);
        pop_up('exnihilosequentia:tuff_pebble', 0.1);
        pop_up('exnihilosequentia:calcite_pebble', 0.1);
        pop_up('exnihilosequentia:dripstone_pebble', 0.1);
        pop_up('minecraft:cookie', 0.008);
        player.addExhaustion(0.02);

        damage_tool(event);
        dig();
    }
});