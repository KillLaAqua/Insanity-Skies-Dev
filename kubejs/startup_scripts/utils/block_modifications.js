BlockEvents.modification((event) => {

    // === Log Tool Requirement ===
    const no_punch = (log) => {
        event.modify(log, (block) => {
            block.requiresTool = true;
        });
    };

    no_punch(/log/);

    ['oak', 'birch', 'acacia', 'cherry', 'dark_oak', 'jungle', 'mangrove', 'spruce'].forEach((log) => {
        no_punch(`minecraft:${log}_wood`);
        no_punch(`minecraft:stripped_${log}_wood`);
    });

    no_punch('exnihilosequentia:jungle_crucible')

    // === MISC Changes ===
    event.modify('gtceu:nether_star_block', (block) => {
        block.lightEmission = 15;
    });

    event.modify(/xtonesreworked:*/, (block) => {
        block.destroySpeed = 0.5;
    });

});
