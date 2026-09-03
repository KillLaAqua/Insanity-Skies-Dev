
// === Crucible Chain ===
[
    { hit: 'kubejs:crucible_stage_0', tool: 'forge:tools/axes', get: 'kubejs:crucible_stage_1' },
    { hit: 'kubejs:crucible_stage_1', tool: 'forge:tools/knives', get: 'kubejs:crucible_stage_2' },
    { hit: 'kubejs:crucible_stage_2', tool: 'forge:tools/saws', get: 'kubejs:crucible_stage_3' },
    { hit: 'kubejs:crucible_stage_3', tool: 'forge:tools/knives', get: 'exnihilosequentia:jungle_crucible' },
].forEach((crucible) => {
    const { hit, tool, get } = crucible;

    BlockEvents.rightClicked(hit, (event) => {
        const { player, block, level, item } = event;

        if (!player.getMainHandItem().hasTag(tool)) return;
        if (player.getOffHandItem() !== null) return;

        block.set(get);
        player.addItem(Item.of('gtceu:wood_dust'));

        damage_tool(event);

        level.playSound(null, block.pos, 'minecraft:block.wood.break', 'blocks');
        player.swing();
    });
});

// === Crafting Table Chain ===
[
    { hit: 'minecraft:jungle_log', tool: 'forge:tools/saws', get: 'kubejs:crafting_stage_1' },
    { hit: 'kubejs:crafting_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crafting_stage_2' },
    { hit: 'kubejs:crafting_stage_2', tool: 'forge:tools/knives', get: 'kubejs:crafting_stage_3' },
    { hit: 'kubejs:crafting_stage_3', tool: 'kubejs:canvas', get: 'minecraft:crafting_table' },
].forEach((table) => {
    const { hit, tool, get } = table;

    BlockEvents.rightClicked(hit, (event) => {
        const { player, block, level, item } = event;

        if (!item.hasTag(tool) && item.id !== 'kubejs:canvas') return;

        if (item.id == 'kubejs:canvas') item.count--;
        if (item.hasTag(tool)) damage_tool(event);

        block.set(get);
        level.playSound(null, block.pos, 'minecraft:block.wood.break', 'blocks');
        player.swing();
    });
});

// === Mud & Clay In-world Shift ===
BlockEvents.rightClicked('minecraft:dirt', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:mud');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:dust', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:clay');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

// === Dead Bush to Jungle Sapling ===
BlockEvents.rightClicked('minecraft:dead_bush', (event) => {
    const { player, block, item, hand, level } = event;

    if (item.id !== 'kubejs:water_bowl') return;

    block.set('minecraft:jungle_sapling');
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.spawnParticles(
        'minecraft:happy_villager',
        false,
        block.x + 0.5,
        block.y + 0.5,
        block.z + 0.5,
        0.25,
        0.25,
        0.25,
        10,
        0.01
    );
    level.playSound(null, block.pos, 'minecraft:item.bone_meal.use', 'blocks');
    player.swing();
});