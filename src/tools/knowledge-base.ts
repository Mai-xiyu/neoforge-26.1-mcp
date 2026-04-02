/**
 * Knowledge base MCP tool - NeoForge 26.1 best practices and common patterns.
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

interface KnowledgeEntry {
  title: string;
  tags: string[];
  content: string;
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    title: 'DeferredRegister Pattern',
    tags: ['registration', 'deferred', 'blocks', 'items', 'registry'],
    content: `# DeferredRegister Pattern (NeoForge 26.1)

DeferredRegister is the ONLY correct way to register game objects in NeoForge.

## Block Registration
\`\`\`java
public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MODID);

// Simple block
public static final DeferredBlock<Block> MY_BLOCK = 
    BLOCKS.registerSimpleBlock("my_block", BlockBehaviour.Properties.of());

// Custom block class
public static final DeferredBlock<MyBlock> CUSTOM_BLOCK =
    BLOCKS.registerBlock("custom_block", MyBlock::new, BlockBehaviour.Properties.of());
\`\`\`

## Item Registration
\`\`\`java
public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);

// Simple item
public static final DeferredItem<Item> MY_ITEM = 
    ITEMS.registerSimpleItem("my_item");

// Block item (auto-generated from block)
public static final DeferredItem<BlockItem> MY_BLOCK_ITEM = 
    ITEMS.registerSimpleBlockItem(MY_BLOCK);

// Custom item
public static final DeferredItem<MyItem> CUSTOM_ITEM =
    ITEMS.register("custom_item", MyItem::new, new Item.Properties().stacksTo(16));
\`\`\`

## Generic Registration
\`\`\`java
// Entities
public static final DeferredRegister<EntityType<?>> ENTITIES = 
    DeferredRegister.create(Registries.ENTITY_TYPE, MODID);

// Block entities
public static final DeferredRegister<BlockEntityType<?>> BLOCK_ENTITIES = 
    DeferredRegister.create(Registries.BLOCK_ENTITY_TYPE, MODID);

// Menu types
public static final DeferredRegister<MenuType<?>> MENUS = 
    DeferredRegister.create(Registries.MENU, MODID);
\`\`\`

## Registration in Mod Constructor
\`\`\`java
@Mod(MODID)
public class MyMod {
    public MyMod(IEventBus modEventBus, ModContainer modContainer) {
        BLOCKS.register(modEventBus);
        ITEMS.register(modEventBus);
        ENTITIES.register(modEventBus);
    }
}
\`\`\`

## IMPORTANT
- NEVER call .get() on a DeferredHolder during static initialization
- Register the DeferredRegister to the mod event bus in the mod constructor
- Use DeferredRegister.createBlocks() and createItems() for type-safe block/item registration`,
  },
  {
    title: 'Event System Architecture',
    tags: ['events', 'bus', 'game', 'mod', 'subscribe', 'listener'],
    content: `# Event System (NeoForge 26.1)

NeoForge has TWO event buses:

## 1. MOD Event Bus (Lifecycle)
Used for: mod loading, registration, setup
\`\`\`java
@EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD)
public class ModEvents {
    @SubscribeEvent
    public static void onCommonSetup(FMLCommonSetupEvent event) { }

    @SubscribeEvent
    public static void onClientSetup(FMLClientSetupEvent event) { }

    @SubscribeEvent
    public static void registerAttributes(EntityAttributeCreationEvent event) { }
}
\`\`\`

## 2. GAME Event Bus (Runtime/NeoForge Bus) 
Used for: gameplay, world events, player actions
\`\`\`java
@EventBusSubscriber(modid = MODID)
public class GameEvents {
    @SubscribeEvent
    public static void onBlockBreak(BlockEvent.BreakEvent event) { }

    @SubscribeEvent
    public static void onPlayerTick(PlayerTickEvent.Post event) { }
}
\`\`\`

## Key rules:
- @EventBusSubscriber methods MUST be static
- Default bus is GAME (NeoForge bus), specify \`bus = Bus.MOD\` for mod bus
- Lifecycle events (FML*Event) go on the MOD bus
- Gameplay events go on the GAME/NeoForge bus
- Use event.enqueueWork() for thread-safe deferred work in setup events
- Check event.isCanceled() before processing cancelable events`,
  },
  {
    title: 'Client-Server Separation',
    tags: ['client', 'server', 'sided', 'dist', 'physical', 'logical'],
    content: `# Client-Server Separation

## Physical vs Logical Sides
- **Physical Client**: The Minecraft application on the player's machine
- **Physical Server**: The dedicated server
- **Logical Client**: Client-side logic (rendering, GUI, input)
- **Logical Server**: Server-side logic (world, entities, game rules)

## The Golden Rules
1. NEVER reference client-only classes from server code
2. NEVER call Minecraft.getInstance() from the server
3. Use level.isClientSide to check the logical side
4. Use @OnlyIn(Dist.CLIENT) sparingly — prefer DistExecutor or separate classes

## Safe Patterns
\`\`\`java
// Checking logical side
if (!level.isClientSide()) {
    // Server logic: modify world, spawn entities, run game rules
} else {
    // Client logic: particles, sounds, UI updates
}

// Separate client event handler
@EventBusSubscriber(modid = MODID, value = Dist.CLIENT)
public class ClientEvents {
    @SubscribeEvent
    public static void onClientSetup(FMLClientSetupEvent event) {
        // Client-only registration (renderers, screens, etc.)
    }
}
\`\`\`

## Common traps:
- Dedicated server has NO client classes — any reference crashes
- Single-player integrated server has both sides in same JVM but separate threads
- Network packets are always needed to communicate between logical sides`,
  },
  {
    title: 'Data Generation (DataGen)',
    tags: ['datagen', 'data', 'recipe', 'loot', 'tag', 'model', 'language', 'generator', 'provider'],
    content: `# Data Generation (NeoForge 26.1)

DataGen automatically generates JSON assets/data files.

## Setup in build.gradle
The "data" run configuration is already set up by the NeoForge MDK.

## GatherDataEvent Handler
\`\`\`java
@EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD)
public class DataGeneration {
    @SubscribeEvent
    public static void gatherData(GatherDataEvent event) {
        DataGenerator generator = event.getGenerator();
        PackOutput packOutput = generator.getPackOutput();
        CompletableFuture<HolderLookup.Provider> lookupProvider = event.getLookupProvider();
        ExistingFileHelper existingFileHelper = event.getExistingFileHelper();

        // Recipes
        generator.addProvider(event.includeServer(),
            new ModRecipeProvider.Runner(packOutput, lookupProvider));

        // Block tags
        var blockTags = new ModBlockTagsProvider(packOutput, lookupProvider, MODID, existingFileHelper);
        generator.addProvider(event.includeServer(), blockTags);

        // Item tags (depends on block tags)
        generator.addProvider(event.includeServer(),
            new ModItemTagsProvider(packOutput, lookupProvider, blockTags.contentsGetter(), MODID, existingFileHelper));

        // Block state & models
        generator.addProvider(event.includeClient(),
            new ModBlockStateProvider(packOutput, MODID, existingFileHelper));

        // Item models
        generator.addProvider(event.includeClient(),
            new ModItemModelProvider(packOutput, MODID, existingFileHelper));

        // Language files
        generator.addProvider(event.includeClient(),
            new ModLanguageProvider(packOutput, MODID, "en_us"));

        // Loot tables
        generator.addProvider(event.includeServer(),
            new ModLootTableProvider(packOutput, lookupProvider));
    }
}
\`\`\`

## Run DataGen
\`\`\`
gradlew runData
\`\`\`
Output goes to \`src/generated/resources/\``,
  },
  {
    title: 'Networking with CustomPacketPayload',
    tags: ['network', 'packet', 'payload', 'stream', 'codec', 'send', 'receive'],
    content: `# Networking (NeoForge 26.1)

NeoForge uses the CustomPacketPayload system (NOT SimpleChannel).

## 1. Define a Payload
\`\`\`java
public record MyPayload(int value, String message) implements CustomPacketPayload {
    public static final Type<MyPayload> TYPE = 
        new Type<>(ResourceLocation.fromNamespaceAndPath(MODID, "my_payload"));

    public static final StreamCodec<FriendlyByteBuf, MyPayload> STREAM_CODEC =
        StreamCodec.of(MyPayload::write, MyPayload::read);

    public static MyPayload read(FriendlyByteBuf buf) {
        return new MyPayload(buf.readInt(), buf.readUtf());
    }

    public void write(FriendlyByteBuf buf) {
        buf.writeInt(value);
        buf.writeUtf(message);
    }

    @Override
    public Type<MyPayload> type() { return TYPE; }

    public static void handle(MyPayload payload, IPayloadContext context) {
        context.enqueueWork(() -> {
            // Process on main thread
            Player player = context.player();
        });
    }
}
\`\`\`

## 2. Register
\`\`\`java
modEventBus.addListener((RegisterPayloadHandlersEvent event) -> {
    PayloadRegistrar registrar = event.registrar(MODID).versioned("1");
    registrar.playToServer(MyPayload.TYPE, MyPayload.STREAM_CODEC, MyPayload::handle);
    // Or: playToClient, playBidirectional
});
\`\`\`

## 3. Send
\`\`\`java
// Client → Server
PacketDistributor.sendToServer(new MyPayload(42, "hello"));

// Server → Client (specific player)
PacketDistributor.sendToPlayer(serverPlayer, new MyPayload(42, "hello"));

// Server → All tracking entity
PacketDistributor.sendToPlayersTrackingEntity(entity, new MyPayload(42, "hello"));
\`\`\``,
  },
  {
    title: 'Capabilities System',
    tags: ['capability', 'capabilities', 'item handler', 'energy', 'fluid', 'inventory', 'storage'],
    content: `# Capabilities (NeoForge 26.1)

NeoForge completely redesigned the capability system. It's now data-driven and type-safe.

## Built-in Capabilities
- \`Capabilities.ItemHandler.BLOCK\` — IItemHandler for blocks
- \`Capabilities.ItemHandler.ENTITY\` — IItemHandler for entities  
- \`Capabilities.ItemHandler.ENTITY_AUTOMATION\` — for external automation (hoppers)
- \`Capabilities.FluidHandler.BLOCK\` — IFluidHandler for blocks
- \`Capabilities.EnergyStorage.BLOCK\` — IEnergyStorage for blocks

## Registering Capabilities
\`\`\`java
@EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD)
public class ModCapabilities {
    @SubscribeEvent
    public static void registerCapabilities(RegisterCapabilitiesEvent event) {
        // Block capability
        event.registerBlockEntity(
            Capabilities.ItemHandler.BLOCK,
            MY_BLOCK_ENTITY_TYPE.get(),
            (blockEntity, direction) -> blockEntity.getItemHandler(direction)
        );

        // Entity capability
        event.registerEntity(
            Capabilities.ItemHandler.ENTITY,
            EntityType.PLAYER,
            (player, ctx) -> new InvWrapper(player.getInventory())
        );
    }
}
\`\`\`

## Querying Capabilities
\`\`\`java
IItemHandler handler = level.getCapability(
    Capabilities.ItemHandler.BLOCK, blockPos, direction);
if (handler != null) {
    // Use the handler
    ItemStack stack = handler.extractItem(0, 1, false);
}
\`\`\`

## Key changes from old Forge:
- No more LazyOptional — capabilities return nullable directly
- Registration is event-based (RegisterCapabilitiesEvent)
- BlockCapability takes a Direction context
- EntityCapability takes a Void context by default`,
  },
  {
    title: 'Creative Tab Registration',
    tags: ['creative', 'tab', 'creative mode', 'creative tab', 'item group'],
    content: `# Creative Tab Registration (NeoForge 26.1)

## Register a Custom Tab
\`\`\`java
public static final DeferredRegister<CreativeModeTab> CREATIVE_TABS = 
    DeferredRegister.create(Registries.CREATIVE_MODE_TAB, MODID);

public static final DeferredHolder<CreativeModeTab, CreativeModeTab> MY_TAB = 
    CREATIVE_TABS.register("my_tab", () -> CreativeModeTab.builder()
        .title(Component.translatable("itemGroup." + MODID))
        .icon(() -> new ItemStack(MY_ITEM.get()))
        .displayItems((params, output) -> {
            output.accept(MY_ITEM.get());
            output.accept(MY_BLOCK_ITEM.get());
        })
        .build());
\`\`\`

## Add Items to Existing Tabs
\`\`\`java
@EventBusSubscriber(modid = MODID, bus = EventBusSubscriber.Bus.MOD)
public class ModCreativeTabs {
    @SubscribeEvent
    public static void buildContents(BuildCreativeModeTabContentsEvent event) {
        if (event.getTabKey() == CreativeModeTabs.BUILDING_BLOCKS) {
            event.accept(MY_BLOCK_ITEM.get());
        }
        if (event.getTabKey() == CreativeModeTabs.INGREDIENTS) {
            event.accept(MY_ITEM.get());
        }
    }
}
\`\`\``,
  },
  {
    title: 'Block Entity (Tile Entity)',
    tags: ['block entity', 'tile entity', 'blockentity', 'ticker', 'sync', 'nbt', 'save', 'load'],
    content: `# Block Entities (NeoForge 26.1)

## Define a Block Entity
\`\`\`java
public class MyBlockEntity extends BlockEntity {
    private int progress = 0;

    public MyBlockEntity(BlockPos pos, BlockState state) {
        super(MY_BLOCK_ENTITY_TYPE.get(), pos, state);
    }

    // Save data
    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putInt("progress", progress);
    }

    // Load data
    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        progress = tag.getInt("progress");
    }

    // Server-side ticking
    public static void serverTick(Level level, BlockPos pos, BlockState state, MyBlockEntity be) {
        be.progress++;
        if (be.progress >= 100) {
            be.progress = 0;
            // Do something
            be.setChanged(); // Mark for saving
        }
    }

    // Client sync packet
    @Override
    public CompoundTag getUpdateTag(HolderLookup.Provider registries) {
        CompoundTag tag = new CompoundTag();
        tag.putInt("progress", progress);
        return tag;
    }

    @Override
    public Packet<ClientGamePacketListener> getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }
}
\`\`\`

## Register
\`\`\`java
public static final DeferredHolder<BlockEntityType<?>, BlockEntityType<MyBlockEntity>> MY_BLOCK_ENTITY_TYPE =
    BLOCK_ENTITIES.register("my_block_entity", () ->
        BlockEntityType.Builder.of(MyBlockEntity::new, MY_BLOCK.get()).build(null));
\`\`\`

## Block with Ticking
\`\`\`java
public class MyBlock extends BaseEntityBlock {
    @Nullable
    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {
        return level.isClientSide() ? null : createTickerHelper(type, MY_BLOCK_ENTITY_TYPE.get(), MyBlockEntity::serverTick);
    }
}
\`\`\``,
  },
  {
    title: 'Access Transformers',
    tags: ['access transformer', 'AT', 'private', 'protected', 'final', 'reflection'],
    content: `# Access Transformers (NeoForge 26.1)

Access Transformers change the access level of existing classes/methods/fields. Since MC 1.26.1 is no longer obfuscated, you use real names.

## File Location
\`src/main/resources/META-INF/accesstransformer.cfg\`

## Reference in build.gradle
Already configured by default in NeoForge MDK (neoForge/accessTransformers block).

## Syntax
\`\`\`
# Make field public
public net.minecraft.world.entity.Entity position

# Make method public
public net.minecraft.world.level.Level setBlock(Lnet/minecraft/core/BlockPos;Lnet/minecraft/world/level/block/state/BlockState;I)Z

# Remove final modifier
public-f net.minecraft.world.entity.Entity maxUpStep
\`\`\`

## Modifiers
- \`public\` — Make public
- \`protected\` — Make protected
- \`default\` — Make package-private
- \`public-f\` — Make public and remove final
- \`protected-f\` — Make protected and remove final

## Important
- Run \`gradlew build\` to apply AT changes
- Since 1.26.1, use real unmapped names (not SRG names)`,
  },
  {
    title: 'Mod Configuration',
    tags: ['config', 'configuration', 'settings', 'properties', 'toml'],
    content: `# Mod Configuration (NeoForge 26.1)

## Define a Config
\`\`\`java
public class ModConfig {
    private static final ModConfigSpec.Builder BUILDER = new ModConfigSpec.Builder();

    public static final ModConfigSpec.IntValue MAX_ENERGY = BUILDER
        .comment("Maximum energy storage")
        .defineInRange("maxEnergy", 10000, 1, Integer.MAX_VALUE);

    public static final ModConfigSpec.BooleanValue ENABLE_FEATURE = BUILDER
        .comment("Enable the cool feature")
        .define("enableFeature", true);

    public static final ModConfigSpec.ConfigValue<String> CUSTOM_NAME = BUILDER
        .comment("Custom display name")
        .define("customName", "Default");

    public static final ModConfigSpec.DoubleValue SPEED_MULT = BUILDER
        .comment("Speed multiplier")
        .defineInRange("speedMultiplier", 1.0, 0.1, 10.0);

    public static final ModConfigSpec SPEC = BUILDER.build();
}
\`\`\`

## Register in Mod Constructor
\`\`\`java
@Mod(MODID)
public class MyMod {
    public MyMod(IEventBus modEventBus, ModContainer modContainer) {
        modContainer.registerConfig(net.neoforged.fml.config.ModConfig.Type.COMMON, ModConfig.SPEC);
    }
}
\`\`\`

## Config Types
- **COMMON** — Shared between client and server, synced
- **CLIENT** — Client-only settings (render distance, UI prefs)
- **SERVER** — Server-only settings (world gen, game rules)

## Access Values
\`\`\`java
int maxEnergy = ModConfig.MAX_ENERGY.get();
boolean enabled = ModConfig.ENABLE_FEATURE.get();
\`\`\``,
  },
  {
    title: 'Codec and DataMap Pattern',
    tags: ['codec', 'datamap', 'serialization', 'json', 'data driven', 'dispatch'],
    content: `# Codecs & DataMaps (NeoForge 26.1)

## Codecs (Mojang Serialization)
Codecs are the standard way to serialize/deserialize data. Used for: world save data, datapacks, network packets.

\`\`\`java
public record MachineData(int energy, String type, boolean active) {
    public static final Codec<MachineData> CODEC = RecordCodecBuilder.create(instance ->
        instance.group(
            Codec.INT.fieldOf("energy").forGetter(MachineData::energy),
            Codec.STRING.fieldOf("type").forGetter(MachineData::type),
            Codec.BOOL.optionalFieldOf("active", false).forGetter(MachineData::active)
        ).apply(instance, MachineData::new)
    );
}
\`\`\`

## Data Maps
NeoForge Data Maps attach custom data to registry entries via datapacks.

\`\`\`java
// Define
public static final DataMapType<Item, FuelData> FUEL_DATA = DataMapType.builder(
    ResourceLocation.fromNamespaceAndPath(MODID, "fuel_data"),
    Registries.ITEM,
    FuelData.CODEC
).build();

// Register
@SubscribeEvent
public static void registerDataMaps(RegisterDataMapTypesEvent event) {
    event.register(FUEL_DATA);
}

// Query
FuelData data = stack.getItem().builtInRegistryHolder().getData(FUEL_DATA);
\`\`\`

## Common Codecs
- \`Codec.INT\`, \`Codec.STRING\`, \`Codec.BOOL\`, \`Codec.FLOAT\`, \`Codec.DOUBLE\`
- \`BlockPos.CODEC\`, \`ResourceLocation.CODEC\`, \`ItemStack.CODEC\`
- \`Codec.list(inner)\` — List<T>
- \`Codec.optionalField(name, codec)\` — Optional<T>
- \`Codec.either(left, right)\` — Either<L, R>
- \`Codec.unboundedMap(keyCodec, valueCodec)\` — Map<K, V>`,
  },
];

export function registerKnowledgeBaseTools(server: McpServer): void {
  server.tool(
    'get_neoforge_knowledge',
    'Get NeoForge 26.1 best practices, patterns, and guides on a specific topic.',
    {
      topic: z.string().describe('Topic to search for (e.g., "registration", "events", "networking", "datagen", "capabilities", "config", "codec")'),
    },
    async ({ topic }) => {
      const normalizedTopic = topic.toLowerCase();
      const scored = KNOWLEDGE_BASE.map(entry => {
        let score = 0;
        // Title match
        if (entry.title.toLowerCase().includes(normalizedTopic)) score += 10;
        // Tag match
        for (const tag of entry.tags) {
          if (tag.includes(normalizedTopic) || normalizedTopic.includes(tag)) score += 5;
        }
        // Content keyword match
        const words = normalizedTopic.split(/\s+/);
        for (const word of words) {
          if (entry.content.toLowerCase().includes(word)) score += 1;
        }
        return { entry, score };
      }).filter(s => s.score > 0).sort((a, b) => b.score - a.score);

      if (scored.length === 0) {
        return {
          content: [{
            type: 'text',
            text: `No knowledge base entries found for "${topic}". Available topics:\n${KNOWLEDGE_BASE.map(e => `- ${e.title} (${e.tags.join(', ')})`).join('\n')}`,
          }],
        };
      }

      const result = scored.slice(0, 3).map(s => s.entry.content).join('\n\n---\n\n');
      return { content: [{ type: 'text', text: result }] };
    },
  );

  server.tool(
    'list_knowledge_topics',
    'List all available NeoForge 26.1 knowledge base topics.',
    {},
    async () => {
      const list = KNOWLEDGE_BASE.map(e => `- **${e.title}** — tags: ${e.tags.join(', ')}`).join('\n');
      return {
        content: [{
          type: 'text',
          text: `# NeoForge 26.1 Knowledge Base\n\n${list}\n\nUse \`get_neoforge_knowledge\` with a topic name or tag to get detailed information.`,
        }],
      };
    },
  );
}
