ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent', (event) => {
    	const result = event.getNewState().getBlock();

    	if (
                result == Blocks.COBBLESTONE ||
                result == Blocks.STONE ||
                result == Blocks.OBSIDIAN
        ) {
                event.setNewState(Blocks.REINFORCED_DEEPSLATE.defaultBlockState());
        } else {
                event.setNewState(event.getOriginalState());
        }
});