# LootCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SUGGEST_LOOT_TABLE` | `SuggestionProvider<CommandSourceStack>` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214516_, CommandBuildContext p_214517_)
```

**Parameters:**

- `p_214516_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214517_` (`CommandBuildContext`)

**Returns:** `public static void`

### addTargets

```java
private static <T extends ArgumentBuilder<CommandSourceStack, T>> T addTargets(T p_137903_, LootCommand.TailProvider p_137904_)
```

**Parameters:**

- `p_137903_` (`T`)
- `p_137904_` (`LootCommand.TailProvider`)

**Returns:** `private static <T extends ArgumentBuilder<CommandSourceStack, T>> T`

### getContainer

```java
private static Container getContainer(CommandSourceStack p_137951_, BlockPos p_137952_)
```

**Parameters:**

- `p_137951_` (`CommandSourceStack`)
- `p_137952_` (`BlockPos`)

**Returns:** `private static Container`

### blockDistribute

```java
private static int blockDistribute(CommandSourceStack p_137961_, BlockPos p_137962_, List<ItemStack> p_137963_, LootCommand.Callback p_137964_)
```

**Parameters:**

- `p_137961_` (`CommandSourceStack`)
- `p_137962_` (`BlockPos`)
- `p_137963_` (`List<ItemStack>`)
- `p_137964_` (`LootCommand.Callback`)

**Returns:** `private static int`

### distributeToContainer

```java
private static boolean distributeToContainer(Container p_137886_, ItemStack p_137887_)
```

**Parameters:**

- `p_137886_` (`Container`)
- `p_137887_` (`ItemStack`)

**Returns:** `private static boolean`

### blockReplace

```java
private static int blockReplace(CommandSourceStack p_137954_, BlockPos p_137955_, int p_137956_, int p_137957_, List<ItemStack> p_137958_, LootCommand.Callback p_137959_)
```

**Parameters:**

- `p_137954_` (`CommandSourceStack`)
- `p_137955_` (`BlockPos`)
- `p_137956_` (`int`)
- `p_137957_` (`int`)
- `p_137958_` (`List<ItemStack>`)
- `p_137959_` (`LootCommand.Callback`)

**Returns:** `private static int`

### canMergeItems

```java
private static boolean canMergeItems(ItemStack p_137895_, ItemStack p_137896_)
```

**Parameters:**

- `p_137895_` (`ItemStack`)
- `p_137896_` (`ItemStack`)

**Returns:** `private static boolean`

### playerGive

```java
private static int playerGive(Collection<ServerPlayer> p_137985_, List<ItemStack> p_137986_, LootCommand.Callback p_137987_)
```

**Parameters:**

- `p_137985_` (`Collection<ServerPlayer>`)
- `p_137986_` (`List<ItemStack>`)
- `p_137987_` (`LootCommand.Callback`)

**Returns:** `private static int`

### setSlots

```java
private static void setSlots(Entity p_137889_, List<ItemStack> p_137890_, int p_137891_, int p_137892_, List<ItemStack> p_137893_)
```

**Parameters:**

- `p_137889_` (`Entity`)
- `p_137890_` (`List<ItemStack>`)
- `p_137891_` (`int`)
- `p_137892_` (`int`)
- `p_137893_` (`List<ItemStack>`)

**Returns:** `private static void`

### entityReplace

```java
private static int entityReplace(Collection<? extends Entity> p_137979_, int p_137980_, int p_137981_, List<ItemStack> p_137982_, LootCommand.Callback p_137983_)
```

**Parameters:**

- `p_137979_` (`Collection<? extends Entity>`)
- `p_137980_` (`int`)
- `p_137981_` (`int`)
- `p_137982_` (`List<ItemStack>`)
- `p_137983_` (`LootCommand.Callback`)

**Returns:** `private static int`

### setSlots

```java
 setSlots()
```

**Returns:** ``

### setSlots

```java
 setSlots()
```

**Returns:** ``

### dropInWorld

```java
private static int dropInWorld(CommandSourceStack p_137946_, Vec3 p_137947_, List<ItemStack> p_137948_, LootCommand.Callback p_137949_)
```

**Parameters:**

- `p_137946_` (`CommandSourceStack`)
- `p_137947_` (`Vec3`)
- `p_137948_` (`List<ItemStack>`)
- `p_137949_` (`LootCommand.Callback`)

**Returns:** `private static int`

### callback

```java
private static void callback(CommandSourceStack p_137966_, List<ItemStack> p_137967_)
```

**Parameters:**

- `p_137966_` (`CommandSourceStack`)
- `p_137967_` (`List<ItemStack>`)

**Returns:** `private static void`

### callback

```java
private static void callback(CommandSourceStack p_137969_, List<ItemStack> p_137970_, ResourceKey<LootTable> p_336191_)
```

**Parameters:**

- `p_137969_` (`CommandSourceStack`)
- `p_137970_` (`List<ItemStack>`)
- `p_336191_` (`ResourceKey<LootTable>`)

**Returns:** `private static void`

### getSourceHandItem

```java
private static ItemStack getSourceHandItem(CommandSourceStack p_137939_, EquipmentSlot p_137940_)
```

**Parameters:**

- `p_137939_` (`CommandSourceStack`)
- `p_137940_` (`EquipmentSlot`)

**Returns:** `private static ItemStack`

### dropBlockLoot

```java
private static int dropBlockLoot(CommandContext<CommandSourceStack> p_137913_, BlockPos p_137914_, ItemStack p_137915_, LootCommand.DropConsumer p_137916_)
```

**Parameters:**

- `p_137913_` (`CommandContext<CommandSourceStack>`)
- `p_137914_` (`BlockPos`)
- `p_137915_` (`ItemStack`)
- `p_137916_` (`LootCommand.DropConsumer`)

**Returns:** `private static int`

### dropKillLoot

```java
private static int dropKillLoot(CommandContext<CommandSourceStack> p_137906_, Entity p_137907_, LootCommand.DropConsumer p_137908_)
```

**Parameters:**

- `p_137906_` (`CommandContext<CommandSourceStack>`)
- `p_137907_` (`Entity`)
- `p_137908_` (`LootCommand.DropConsumer`)

**Returns:** `private static int`

### dropChestLoot

```java
private static int dropChestLoot(CommandContext<CommandSourceStack> p_137933_, Holder<LootTable> p_336054_, LootCommand.DropConsumer p_137935_)
```

**Parameters:**

- `p_137933_` (`CommandContext<CommandSourceStack>`)
- `p_336054_` (`Holder<LootTable>`)
- `p_137935_` (`LootCommand.DropConsumer`)

**Returns:** `private static int`

### drop

```java
return drop()
```

**Returns:** `return`

### dropFishingLoot

```java
private static int dropFishingLoot(CommandContext<CommandSourceStack> p_137927_, Holder<LootTable> p_335944_, BlockPos p_137929_, ItemStack p_137930_, LootCommand.DropConsumer p_137931_)
```

**Parameters:**

- `p_137927_` (`CommandContext<CommandSourceStack>`)
- `p_335944_` (`Holder<LootTable>`)
- `p_137929_` (`BlockPos`)
- `p_137930_` (`ItemStack`)
- `p_137931_` (`LootCommand.DropConsumer`)

**Returns:** `private static int`

### drop

```java
return drop()
```

**Returns:** `return`

### drop

```java
private static int drop(CommandContext<CommandSourceStack> p_287721_, Holder<LootTable> p_335766_, LootParams p_287728_, LootCommand.DropConsumer p_287770_)
```

**Parameters:**

- `p_287721_` (`CommandContext<CommandSourceStack>`)
- `p_335766_` (`Holder<LootTable>`)
- `p_287728_` (`LootParams`)
- `p_287770_` (`LootCommand.DropConsumer`)

**Returns:** `private static int`

### accept

```java
void accept(List<ItemStack> p_138048_)
```

**Parameters:**

- `p_138048_` (`List<ItemStack>`)

### accept

```java
int accept(CommandContext<CommandSourceStack> p_138050_, List<ItemStack> p_138051_, LootCommand.Callback p_138052_)
```

**Parameters:**

- `p_138050_` (`CommandContext<CommandSourceStack>`)
- `p_138051_` (`List<ItemStack>`)
- `p_138052_` (`LootCommand.Callback`)

**Returns:** `int`

### construct

```java
ArgumentBuilder<CommandSourceStack, ?> construct(ArgumentBuilder<CommandSourceStack, ?> p_138054_, LootCommand.DropConsumer p_138055_)
```

**Parameters:**

- `p_138054_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_138055_` (`LootCommand.DropConsumer`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`
