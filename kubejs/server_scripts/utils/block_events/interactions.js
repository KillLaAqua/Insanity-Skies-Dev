
// === Jungle Wood Stripping (Bark + Resin) ===
BlockEvents.rightClicked('minecraft:jungle_log', (event) => {
    const { player, block, item, level } = event;

    if (!item.hasTag('minecraft:axes')) return;

    player.addItem(Item.of('kubejs:jungle_bark'));
    if (Math.random() < 0.1) player.addItem(Item.of('gtceu:sticky_resin'));
});

// === Water Bowl + Crucible Interactions ===
BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', (event) => {
    const { player, block, item, hand, level } = event;
    const { FluidName: fluid, Amount: amount } = block.entityData.tank;

    if (item.id !== 'minecraft:bowl') return;
    if (fluid !== 'minecraft:water' || amount < 250) return;

    block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount - 250 } });

    if (item.count > 1) {
        player.give(Item.of('kubejs:water_bowl'));
        item.count--;
    } else {
        player.setItemInHand(hand, Item.of('kubejs:water_bowl'));
    }

    level.playSound(null, block.pos, 'minecraft:item.bucket.fill', 'blocks');
    player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', (event) => {
    const { player, block, item, hand, level } = event;
    const { FluidName: fluid, Amount: amount } = block.entityData.tank;

    if (item.id !== 'kubejs:water_bowl') return;
    if (fluid !== 'minecraft:water' || amount > 1750) return;

    block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount + 250 } });
    player.setItemInHand(hand, Item.of('minecraft:bowl'));

    level.playSound(null, block.pos, 'minecraft:item.bucket.empty', 'blocks');
    player.swing();
});