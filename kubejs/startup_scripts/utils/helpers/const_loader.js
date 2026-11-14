// priority: 1000000

//GTCEU Loader

//Multiblock Relative Direction Loader
const $RelativeDirection = Java.loadClass('com.gregtechceu.gtceu.api.pattern.util.RelativeDirection');
//.pattern(definition => FactoryBlockPattern.start($RelativeDirection.BACK, $RelativeDirection.UP, $RelativeDirection.RIGHT)
// redefines load order on multiblock (good for things like distillation tower and assembly line variants)
// .start() defaults to LEFT, UP, FRONT
// UP, DOWN, LEFT, RIGHT, FRONT, BACK are the 6 valid directions

//Steam Parallels Loader
const $SteamMulti = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine'
);
//.machine((holder) => new $SteamMulti(holder, 8))
// sets multiblock to use steam
//.recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
// allows multiblock to do steam parallels

//Assembly Line Recipe Type Loader
const $AssemblyLineMulti = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.electric.AssemblyLineMachine'
);
//.machine((holder) => new $AssemblyLineMulti(holder))
// sets multiblock to use Assembly Line Recipe Logic
//Predicates.abilities(PartAbility.EXPORT_ITEMS).addTooltips(Component.translatable("gtceu.multiblock.pattern.location_end")
// this give preview output distinction that output is on end (purely cosmetic)

//Heat Coiled Machine Loader
const $CoiledMulti = Java.loadClass(
    'com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine'
);
//.machine((holder) => new $CoiledMulti(holder))
// sets multiblock to use Heat Coiled Machine Recipe Logic

//LargeTurbine Machine Loader
const $LargeTurbine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine');
//.machine((holder) => new $LargeTurbine(holder, GTValues.IV))
// sets multiblock to use IV tiered turbine (like plasma turbine)
//.recipeModifier((machine, recipe) => $LargeTurbine.recipeModifier(machine, recipe), true)
// allows multiblock to do turbine parallels/scaling

const $GTMachineModelProperties = Java.loadClass('com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties');

const $CleanroomType = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType');
//usable to add "cleanroom types", example:
// const absoluteStabilization = new $CleanroomType('stabilized', 'gtceu.absolute_stabilization');

const $CleaningMaintenanceHatchPartMachine = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine'
);
//Applying with Maintanence Hatches

const $FluidHatchPartMachine = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine'
);
//Adding new fluid hatch types

const $LayeredWorkableElectricMultiblockMachine = Java.loadClass(
    'com.gregtechceu.gtceu.api.machine.multiblock.LayeredWorkableElectricMultiblockMachine'
);
//.machine((holder) => new $LayeredWorkableElectricMultiblockMachine(holder))
//Layered Input Supported Machine

// Formatting Util
const $FormattingUtil = Java.loadClass('com.gregtechceu.gtceu.utils.FormattingUtil');

// Optical Computation Machine (for multiblocks that use CWU)
const $OpticalComputationMachine = Java.loadClass(
    'com.gregtechceu.gtceu.common.machine.multiblock.electric.research.OpticalComputationMachine'
);
