/**
 * NeoForge 26.1 code templates for generation tools.
 */

export interface ModProjectConfig {
  modId: string;
  modName: string;
  packageName: string;
  mcVersion: string;
  neoForgeVersion: string;
}

export interface BlockConfig {
  blockName: string;
  hasBlockEntity: boolean;
  hasBlockStates: boolean;
  material: string;
  hardness: number;
  resistance: number;
}

export interface ItemConfig {
  itemName: string;
  isFood: boolean;
  maxStackSize: number;
  nutrition: number;
  saturation: number;
}

export interface EntityConfig {
  entityName: string;
  entityType: 'living' | 'projectile' | 'misc';
  health: number;
  width: number;
  height: number;
}

export interface EventHandlerConfig {
  eventClass: string;
  bus: 'MOD' | 'GAME';
  modId: string;
}

export interface NetworkPacketConfig {
  packetName: string;
  fields: { name: string; type: string }[];
  direction: 'toServer' | 'toClient' | 'bidirectional';
}

export interface DataProviderConfig {
  providerType: 'recipe' | 'loot' | 'tag' | 'model' | 'language' | 'blockstate';
  modId: string;
}

// ─── Templates ───

export function generateModProjectTemplate(config: ModProjectConfig): Record<string, string> {
  const files: Record<string, string> = {};

  // build.gradle
  files['build.gradle'] = `plugins {
    id 'java-library'
    id 'eclipse'
    id 'idea'
    id 'maven-publish'
    id 'net.neoforged.moddev' version '2.0.141'
}

version = project.mod_version
group = project.mod_group_id

repositories {
    mavenLocal()
}

base {
    archivesName = project.mod_id
}

java.toolchain.languageVersion = JavaLanguageVersion.of(21)

neoForge {
    version = project.neo_version

    parchment {
        minecraftVersion = project.parchment_minecraft_version
        mappingsVersion = project.parchment_mappings_version
    }

    runs {
        client { client() }
        server { server() }
        data {
            data()
            programArguments.addAll '--mod', project.mod_id,
                '--all', '--output', file('src/generated/resources/').absolutePath,
                '--existing', file('src/main/resources/').absolutePath
        }
    }

    mods {
        "\${project.mod_id}" {
            sourceSet(sourceSets.main)
        }
    }
}

sourceSets.main.resources { srcDir 'src/generated/resources' }

dependencies {
    // Add mod dependencies here
}
`;

  // gradle.properties
  files['gradle.properties'] = `org.gradle.jvmargs=-Xmx2G
org.gradle.daemon=true
org.gradle.parallel=true
org.gradle.caching=true

minecraft_version=${config.mcVersion}
minecraft_version_range=[${config.mcVersion},)
neo_version=${config.neoForgeVersion}
neo_version_range=[${config.neoForgeVersion.split('.')[0]},)
loader_version_range=[4,)
parchment_minecraft_version=${config.mcVersion.split('.').slice(0, 2).join('.')}
parchment_mappings_version=2025.12.21-nightly

mod_id=${config.modId}
mod_name=${config.modName}
mod_license=MIT
mod_version=1.0.0
mod_group_id=${config.packageName}
mod_authors=Author
mod_description=A NeoForge mod.
`;

  // Main mod class
  files[`src/main/java/${config.packageName.replace(/\./g, '/')}/${pascalCase(config.modId)}.java`] = `package ${config.packageName};

import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.registries.DeferredBlock;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Mod(${pascalCase(config.modId)}.MODID)
public class ${pascalCase(config.modId)} {
    public static final String MODID = "${config.modId}";
    public static final Logger LOGGER = LoggerFactory.getLogger(MODID);

    // Deferred Registers
    public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MODID);
    public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);

    public ${pascalCase(config.modId)}(IEventBus modEventBus, ModContainer modContainer) {
        BLOCKS.register(modEventBus);
        ITEMS.register(modEventBus);

        // Register mod event listeners here
    }
}
`;

  // mods.toml
  files['src/main/templates/META-INF/neoforge.mods.toml'] = `modLoader = "javafml"
loaderVersion = "\${loader_version_range}"
license = "\${mod_license}"

[[mods]]
modId = "\${mod_id}"
version = "\${mod_version}"
displayName = "\${mod_name}"
description = '''\${mod_description}'''
authors = "\${mod_authors}"

[[dependencies.\${mod_id}]]
modId = "neoforge"
type = "required"
versionRange = "\${neo_version_range}"
ordering = "NONE"
side = "BOTH"

[[dependencies.\${mod_id}]]
modId = "minecraft"
type = "required"
versionRange = "\${minecraft_version_range}"
ordering = "NONE"
side = "BOTH"
`;

  return files;
}

export function generateBlockTemplate(config: BlockConfig): string {
  const className = pascalCase(config.blockName);
  const lines: string[] = [];

  if (config.hasBlockEntity) {
    lines.push(`import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.BaseEntityBlock;
import net.minecraft.world.level.block.RenderShape;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityTicker;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public class ${className}Block extends BaseEntityBlock {
    public ${className}Block(BlockBehaviour.Properties properties) {
        super(properties
            .destroyTime(${config.hardness}f)
            .explosionResistance(${config.resistance}f));
    }

    @Override
    protected RenderShape getRenderShape(BlockState state) {
        return RenderShape.MODEL;
    }

    @Nullable
    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        // TODO: Return your block entity type here
        return null; // return new ${className}BlockEntity(pos, state);
    }

    @Nullable
    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {
        if (!level.isClientSide()) {
            // Server-side tick logic
            // return createTickerHelper(type, YOUR_BLOCK_ENTITY_TYPE.get(), ${className}BlockEntity::serverTick);
        }
        return null;
    }
}`);
  } else if (config.hasBlockStates) {
    lines.push(`import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.StateDefinition;
import net.minecraft.world.level.block.state.properties.BooleanProperty;
import org.jetbrains.annotations.Nullable;

public class ${className}Block extends Block {
    public static final BooleanProperty ACTIVE = BooleanProperty.create("active");

    public ${className}Block(BlockBehaviour.Properties properties) {
        super(properties
            .destroyTime(${config.hardness}f)
            .explosionResistance(${config.resistance}f));
        registerDefaultState(stateDefinition.any().setValue(ACTIVE, false));
    }

    @Override
    protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> builder) {
        builder.add(ACTIVE);
    }

    @Nullable
    @Override
    public BlockState getStateForPlacement(BlockPlaceContext context) {
        return defaultBlockState().setValue(ACTIVE, false);
    }
}`);
  } else {
    lines.push(`import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockBehaviour;

public class ${className}Block extends Block {
    public ${className}Block(BlockBehaviour.Properties properties) {
        super(properties
            .destroyTime(${config.hardness}f)
            .explosionResistance(${config.resistance}f));
    }
}`);
  }

  lines.push('');
  lines.push(`// Registration (in your mod's registration class):`);
  lines.push(`// public static final DeferredBlock<${className}Block> ${config.blockName.toUpperCase()} =`);
  lines.push(`//     BLOCKS.registerBlock("${config.blockName}", ${className}Block::new, BlockBehaviour.Properties.of());`);
  lines.push(`// public static final DeferredItem<BlockItem> ${config.blockName.toUpperCase()}_ITEM =`);
  lines.push(`//     ITEMS.registerSimpleBlockItem(${config.blockName.toUpperCase()});`);

  return lines.join('\n');
}

export function generateItemTemplate(config: ItemConfig): string {
  const className = pascalCase(config.itemName);

  if (config.isFood) {
    return `import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.Item;

public class ${className}Item extends Item {
    public ${className}Item(Item.Properties properties) {
        super(properties
            .stacksTo(${config.maxStackSize})
            .food(new FoodProperties.Builder()
                .nutrition(${config.nutrition})
                .saturationModifier(${config.saturation}f)
                .build()));
    }
}

// Registration:
// public static final DeferredItem<${className}Item> ${config.itemName.toUpperCase()} =
//     ITEMS.register("${config.itemName}", ${className}Item::new, new Item.Properties());
`;
  }

  return `import net.minecraft.world.item.Item;

public class ${className}Item extends Item {
    public ${className}Item(Item.Properties properties) {
        super(properties.stacksTo(${config.maxStackSize}));
    }
}

// Registration:
// public static final DeferredItem<${className}Item> ${config.itemName.toUpperCase()} =
//     ITEMS.register("${config.itemName}", ${className}Item::new, new Item.Properties());
`;
}

export function generateEntityTemplate(config: EntityConfig): string {
  const className = pascalCase(config.entityName);

  if (config.entityType === 'living') {
    return `import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.attributes.AttributeSupplier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.level.Level;

public class ${className}Entity extends Mob {
    public ${className}Entity(EntityType<? extends ${className}Entity> type, Level level) {
        super(type, level);
    }

    public static AttributeSupplier.Builder createAttributes() {
        return Mob.createMobAttributes()
            .add(Attributes.MAX_HEALTH, ${config.health})
            .add(Attributes.MOVEMENT_SPEED, 0.25D)
            .add(Attributes.ATTACK_DAMAGE, 3.0D);
    }

    @Override
    protected void registerGoals() {
        // Add AI goals here
        // this.goalSelector.addGoal(0, new FloatGoal(this));
        // this.goalSelector.addGoal(1, new MeleeAttackGoal(this, 1.0D, true));
        // this.goalSelector.addGoal(7, new WaterAvoidingRandomStrollGoal(this, 1.0D));
    }
}

// Registration:
// public static final DeferredHolder<EntityType<?>, EntityType<${className}Entity>> ${config.entityName.toUpperCase()} =
//     ENTITIES.register("${config.entityName}", () -> EntityType.Builder.of(${className}Entity::new, MobCategory.CREATURE)
//         .sized(${config.width}f, ${config.height}f)
//         .build("${config.entityName}"));
//
// Don't forget to register attributes in a RegisterEvent or FMLCommonSetupEvent!
`;
  }

  if (config.entityType === 'projectile') {
    return `import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.projectile.ThrowableItemProjectile;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.EntityHitResult;
import net.minecraft.world.phys.HitResult;

public class ${className}Entity extends ThrowableItemProjectile {
    public ${className}Entity(EntityType<? extends ${className}Entity> type, Level level) {
        super(type, level);
    }

    @Override
    protected Item getDefaultItem() {
        return Items.SNOWBALL; // TODO: Replace with your item
    }

    @Override
    protected void onHitEntity(EntityHitResult result) {
        super.onHitEntity(result);
        result.getEntity().hurt(damageSources().thrown(this, getOwner()), 2.0f);
    }

    @Override
    protected void onHit(HitResult result) {
        super.onHit(result);
        if (!level().isClientSide()) {
            discard();
        }
    }
}
`;
  }

  return `import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.level.Level;

public class ${className}Entity extends Entity {
    public ${className}Entity(EntityType<?> type, Level level) {
        super(type, level);
    }

    @Override
    protected void defineSynchedData(SynchedEntityData.Builder builder) {
        // Define synced data here
    }

    @Override
    protected void readAdditionalSaveData(CompoundTag tag) {
        // Read NBT data
    }

    @Override
    protected void addAdditionalSaveData(CompoundTag tag) {
        // Save NBT data
    }
}
`;
}

export function generateEventHandlerTemplate(config: EventHandlerConfig): string {
  const isMod = config.bus === 'MOD';

  return `import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
${isMod ? `import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.fml.event.lifecycle.FMLClientSetupEvent;` : `import net.neoforged.neoforge.event.entity.player.PlayerEvent;`}

@EventBusSubscriber(modid = "${config.modId}"${isMod ? ', bus = EventBusSubscriber.Bus.MOD' : ''})
public class ${isMod ? 'ModEvents' : 'GameEvents'} {
${isMod ? `
    @SubscribeEvent
    public static void onCommonSetup(FMLCommonSetupEvent event) {
        // Common setup logic (runs on both client and server)
        event.enqueueWork(() -> {
            // Thread-safe deferred work
        });
    }

    @SubscribeEvent
    public static void onClientSetup(FMLClientSetupEvent event) {
        // Client-only setup logic
        event.enqueueWork(() -> {
            // Register client-side things
        });
    }` : `
    @SubscribeEvent
    public static void onPlayerLogin(PlayerEvent.PlayerLoggedInEvent event) {
        // Handle player login
    }

    // Add more event handlers here
    // @SubscribeEvent
    // public static void onBlockBreak(BlockEvent.BreakEvent event) { }
`}
}
`;
}

export function generateNetworkPacketTemplate(config: NetworkPacketConfig): string {
  const className = pascalCase(config.packetName);
  const fields = config.fields.map(f => `    private final ${f.type} ${f.name};`).join('\n');
  const constructorParams = config.fields.map(f => `${f.type} ${f.name}`).join(', ');
  const constructorAssigns = config.fields.map(f => `        this.${f.name} = ${f.name};`).join('\n');
  const codecMethods = config.fields.map(f => {
    const type = f.type;
    if (type === 'int') return `buf.readInt()`;
    if (type === 'String') return `buf.readUtf()`;
    if (type === 'boolean') return `buf.readBoolean()`;
    if (type === 'float') return `buf.readFloat()`;
    if (type === 'double') return `buf.readDouble()`;
    if (type === 'BlockPos') return `buf.readBlockPos()`;
    if (type === 'ResourceLocation') return `buf.readResourceLocation()`;
    if (type === 'ItemStack') return `ItemStack.OPTIONAL_STREAM_CODEC.decode(buf)`;
    return `buf.readUtf() /* TODO: proper codec for ${type} */`;
  }).join(', ');
  const encodeMethods = config.fields.map(f => {
    const type = f.type;
    if (type === 'int') return `        buf.writeInt(this.${f.name});`;
    if (type === 'String') return `        buf.writeUtf(this.${f.name});`;
    if (type === 'boolean') return `        buf.writeBoolean(this.${f.name});`;
    if (type === 'float') return `        buf.writeFloat(this.${f.name});`;
    if (type === 'double') return `        buf.writeDouble(this.${f.name});`;
    if (type === 'BlockPos') return `        buf.writeBlockPos(this.${f.name});`;
    if (type === 'ResourceLocation') return `        buf.writeResourceLocation(this.${f.name});`;
    if (type === 'ItemStack') return `        ItemStack.OPTIONAL_STREAM_CODEC.encode(buf, this.${f.name});`;
    return `        buf.writeUtf(this.${f.name}.toString()); // TODO: proper codec for ${type}`;
  }).join('\n');

  return `import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.resources.ResourceLocation;
import net.neoforged.neoforge.network.handling.IPayloadContext;

public record ${className}Payload(${constructorParams}) implements CustomPacketPayload {
    public static final CustomPacketPayload.Type<${className}Payload> TYPE =
        new CustomPacketPayload.Type<>(ResourceLocation.fromNamespaceAndPath("yourmod", "${config.packetName}"));

    public static final StreamCodec<FriendlyByteBuf, ${className}Payload> STREAM_CODEC =
        StreamCodec.of(${className}Payload::write, ${className}Payload::read);

    public static ${className}Payload read(FriendlyByteBuf buf) {
        return new ${className}Payload(${codecMethods});
    }

    public void write(FriendlyByteBuf buf) {
${encodeMethods}
    }

    @Override
    public Type<${className}Payload> type() {
        return TYPE;
    }

    public static void handle(${className}Payload payload, IPayloadContext context) {
        context.enqueueWork(() -> {
            // Handle packet on the receiving side
            // Use context.player() to get the player
        });
    }
}

// Registration (in your mod constructor or setup):
// modEventBus.addListener((RegisterPayloadHandlersEvent event) -> {
//     PayloadRegistrar registrar = event.registrar("yourmod").versioned("1");
//     registrar.playToServer(${className}Payload.TYPE, ${className}Payload.STREAM_CODEC, ${className}Payload::handle);
// });
`;
}

export function generateDataProviderTemplate(config: DataProviderConfig): string {
  switch (config.providerType) {
    case 'recipe':
      return `import net.minecraft.core.HolderLookup;
import net.minecraft.data.PackOutput;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.RecipeProvider;
import net.minecraft.data.recipes.ShapedRecipeBuilder;
import net.minecraft.world.item.Items;

import java.util.concurrent.CompletableFuture;

public class ModRecipeProvider extends RecipeProvider {
    public ModRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }

    @Override
    protected void buildRecipes() {
        // Example shaped recipe
        // ShapedRecipeBuilder.shaped(RecipeCategory.MISC, YOUR_ITEM.get())
        //     .pattern("###")
        //     .pattern(" | ")
        //     .pattern(" | ")
        //     .define('#', Items.IRON_INGOT)
        //     .define('|', Items.STICK)
        //     .unlockedBy("has_iron", has(Items.IRON_INGOT))
        //     .save(output);
    }

    public static class Runner extends RecipeProvider.Runner {
        public Runner(PackOutput output, CompletableFuture<HolderLookup.Provider> registries) {
            super(output, registries);
        }

        @Override
        protected RecipeProvider createRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
            return new ModRecipeProvider(registries, output);
        }

        @Override
        public String getName() {
            return "${config.modId} Recipes";
        }
    }
}

// Register in GatherDataEvent:
// generator.addProvider(event.includeServer(), new ModRecipeProvider.Runner(packOutput, lookupProvider));
`;

    case 'loot':
      return `import net.minecraft.core.HolderLookup;
import net.minecraft.data.loot.BlockLootSubProvider;
import net.minecraft.world.flag.FeatureFlags;
import net.minecraft.world.level.block.Block;

import java.util.Set;

public class ModBlockLootProvider extends BlockLootSubProvider {
    public ModBlockLootProvider(HolderLookup.Provider registries) {
        super(Set.of(), FeatureFlags.REGISTRY.allFlags(), registries);
    }

    @Override
    protected void generate() {
        // Self-dropping block (drops itself)
        // dropSelf(YOUR_BLOCK.get());

        // Block that drops items (like ore)
        // add(YOUR_ORE.get(), createOreDrop(YOUR_ORE.get(), YOUR_RAW_ITEM.get()));
    }

    @Override
    protected Iterable<Block> getKnownBlocks() {
        // Return all blocks from your mod's block registry
        return Set.of(); // YOUR_BLOCKS.getEntries().stream().map(DeferredHolder::get).collect(Collectors.toSet());
    }
}
`;

    case 'tag':
      return `import net.minecraft.core.HolderLookup;
import net.minecraft.data.PackOutput;
import net.minecraft.data.tags.BlockTagsProvider;
import net.minecraft.tags.BlockTags;
import net.neoforged.neoforge.common.data.ExistingFileHelper;

import java.util.concurrent.CompletableFuture;

public class ModBlockTagsProvider extends BlockTagsProvider {
    public ModBlockTagsProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> lookupProvider, String modId, ExistingFileHelper existingFileHelper) {
        super(output, lookupProvider, modId, existingFileHelper);
    }

    @Override
    protected void addTags(HolderLookup.Provider provider) {
        // tag(BlockTags.MINEABLE_WITH_PICKAXE).add(YOUR_BLOCK.get());
        // tag(BlockTags.NEEDS_IRON_TOOL).add(YOUR_BLOCK.get());
    }
}
`;

    case 'model':
      return `import net.minecraft.data.PackOutput;
import net.neoforged.neoforge.client.model.generators.BlockStateProvider;
import net.neoforged.neoforge.common.data.ExistingFileHelper;

public class ModBlockStateProvider extends BlockStateProvider {
    public ModBlockStateProvider(PackOutput output, String modid, ExistingFileHelper exFileHelper) {
        super(output, modid, exFileHelper);
    }

    @Override
    protected void registerStatesAndModels() {
        // Simple cube block
        // simpleBlockWithItem(YOUR_BLOCK.get(), cubeAll(YOUR_BLOCK.get()));

        // Block with custom model
        // ModelFile model = models().withExistingParent("your_block", "block/cube_all")
        //     .texture("all", modLoc("block/your_block"));
        // simpleBlockWithItem(YOUR_BLOCK.get(), model);
    }
}
`;

    case 'language':
      return `import net.minecraft.data.PackOutput;
import net.neoforged.neoforge.common.data.LanguageProvider;

public class ModLanguageProvider extends LanguageProvider {
    public ModLanguageProvider(PackOutput output, String modid, String locale) {
        super(output, modid, locale);
    }

    @Override
    protected void addTranslations() {
        // addBlock(YOUR_BLOCK, "Your Block");
        // addItem(YOUR_ITEM, "Your Item");
        // add("itemGroup." + MODID, "Your Mod Tab");
    }
}
`;

    case 'blockstate':
      return generateDataProviderTemplate({ ...config, providerType: 'model' });

    default:
      return `// Unknown provider type: ${config.providerType}`;
  }
}

// ─── Utility ───

function pascalCase(str: string): string {
  return str
    .split(/[_\-\s]+/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('');
}
