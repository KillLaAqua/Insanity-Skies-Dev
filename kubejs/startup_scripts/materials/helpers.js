// priority 1000

const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const FluidPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties');

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

global.v = {
    ulv: GTValues.V[GTValues.ULV],
    lv: GTValues.V[GTValues.LV],
    mv: GTValues.V[GTValues.MV],
    hv: GTValues.V[GTValues.HV],
    ev: GTValues.V[GTValues.EV],
    iv: GTValues.V[GTValues.IV],
    luv: GTValues.V[GTValues.LuV],
    zpm: GTValues.V[GTValues.ZPM],
    uv: GTValues.V[GTValues.UV],
    uhv: GTValues.V[GTValues.UHV],
    uev: GTValues.V[GTValues.UEV],
    uiv: GTValues.V[GTValues.UIV],
    uxv: GTValues.V[GTValues.UXV],
    opv: GTValues.V[GTValues.OpV],
    max: GTValues.V[GTValues.MAX],
};

global.va = {
    ulv: GTValues.VA[GTValues.ULV],
    lv: GTValues.VA[GTValues.LV],
    mv: GTValues.VA[GTValues.MV],
    hv: GTValues.VA[GTValues.HV],
    ev: GTValues.VA[GTValues.EV],
    iv: GTValues.VA[GTValues.IV],
    luv: GTValues.VA[GTValues.LuV],
    zpm: GTValues.VA[GTValues.ZPM],
    uv: GTValues.VA[GTValues.UV],
    uhv: GTValues.VA[GTValues.UHV],
    uev: GTValues.VA[GTValues.UEV],
    uiv: GTValues.VA[GTValues.UIV],
    uxv: GTValues.VA[GTValues.UXV],
    opv: GTValues.VA[GTValues.OpV],
    max: GTValues.VA[GTValues.MAX],
};

global.vh = {
    ulv: GTValues.VH[GTValues.ULV],
    lv: GTValues.VH[GTValues.LV],
    mv: GTValues.VH[GTValues.MV],
    hv: GTValues.VH[GTValues.HV],
    ev: GTValues.VH[GTValues.EV],
    iv: GTValues.VH[GTValues.IV],
    luv: GTValues.VH[GTValues.LuV],
    zpm: GTValues.VH[GTValues.ZPM],
    uv: GTValues.VH[GTValues.UV],
    uhv: GTValues.VH[GTValues.UHV],
    uev: GTValues.VH[GTValues.UEV],
    uiv: GTValues.VH[GTValues.UIV],
    uxv: GTValues.VH[GTValues.UXV],
    opv: GTValues.VH[GTValues.OpV],
    max: GTValues.VH[GTValues.MAX],
};

global.vha = {
    ulv: GTValues.VHA[GTValues.ULV],
    lv: GTValues.VHA[GTValues.LV],
    mv: GTValues.VHA[GTValues.MV],
    hv: GTValues.VHA[GTValues.HV],
    ev: GTValues.VHA[GTValues.EV],
    iv: GTValues.VHA[GTValues.IV],
    luv: GTValues.VHA[GTValues.LuV],
    zpm: GTValues.VHA[GTValues.ZPM],
    uv: GTValues.VHA[GTValues.UV],
    uhv: GTValues.VHA[GTValues.UHV],
    uev: GTValues.VHA[GTValues.UEV],
    uiv: GTValues.VHA[GTValues.UIV],
    uxv: GTValues.VHA[GTValues.UXV],
    opv: GTValues.VHA[GTValues.OpV],
    max: GTValues.VHA[GTValues.MAX],
};

global.periodicTableElement = (material, type) => {
    let mat = GTMaterials.get(material);
    switch (type) {
        case 'ingot':
            mat.setProperty(PropertyKey.INGOT, new IngotProperty());
            break;
        case 'dust':
            mat.setProperty(PropertyKey.DUST, new DustProperty());
            break;
        case 'fluid':
        case 'gas':
        case 'plasma':
        case 'molten':
        case 'gas_plasma': {
            let prop = new FluidProperty();
            switch (type) {
                case 'fluid':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder());
                    break;
                case 'gas':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder());
                    break;
                case 'plasma':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder());
                    break;
                case 'molten':
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder());
                    break;
                case 'gas_plasma': {
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder());
                    prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder());
                    break;
                }
            }
            mat.setProperty(PropertyKey.FLUID, prop);
            break;
        }
    }
};

global.blastProperty = (material, temperature, gasTier, voltage, duration) => {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new BlastProperty(temperature, gasTier, voltage, duration, -1, -1));
};
