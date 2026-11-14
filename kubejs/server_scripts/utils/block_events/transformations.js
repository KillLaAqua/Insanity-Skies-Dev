
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
    { start: 'minecraft:stripped_jungle_log', tag: 'forge:tools/saws', held: '', end: 'kubejs:crafting_stage_1' },
    { start: 'kubejs:crafting_stage_1', tag: 'forge:tools/knives', held: '', end: 'kubejs:crafting_stage_2' },
    { start: 'kubejs:crafting_stage_2', tag: '', held: 'kubejs:canvas', end: 'kubejs:crafting_stage_3' },
    { start: 'kubejs:crafting_stage_3', tag: '', held: 'minecraft:flint', end: 'minecraft:crafting_table' },
].forEach((table) => {
    const { start, tag, held, end } = table;

    BlockEvents.rightClicked(start, (event) => {
        const { player, block, level, item } = event;

        if (held && item.id !== held) return;
        if (tag && !item.hasTag(tag)) return;

        if (held) item.count--;
        if (tag) damage_tool(event);

        block.set(end);
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