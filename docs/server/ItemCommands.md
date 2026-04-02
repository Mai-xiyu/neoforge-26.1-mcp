# ItemCommands

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214449_, CommandBuildContext p_214450_)
```

**Parameters:**

- `p_214449_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214450_` (`CommandBuildContext`)

**Returns:** `public static void`

### modifyBlockItem

```java
private static int modifyBlockItem(CommandSourceStack p_180297_, BlockPos p_180298_, int p_180299_, Holder<LootItemFunction> p_335627_)
```

**Parameters:**

- `p_180297_` (`CommandSourceStack`)
- `p_180298_` (`BlockPos`)
- `p_180299_` (`int`)
- `p_335627_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### modifyEntityItem

```java
private static int modifyEntityItem(CommandSourceStack p_180337_, Collection<? extends Entity> p_180338_, int p_180339_, Holder<LootItemFunction> p_335904_)
```

**Parameters:**

- `p_180337_` (`CommandSourceStack`)
- `p_180338_` (`Collection<? extends Entity>`)
- `p_180339_` (`int`)
- `p_335904_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### setBlockItem

```java
private static int setBlockItem(CommandSourceStack p_180292_, BlockPos p_180293_, int p_180294_, ItemStack p_180295_)
```

**Parameters:**

- `p_180292_` (`CommandSourceStack`)
- `p_180293_` (`BlockPos`)
- `p_180294_` (`int`)
- `p_180295_` (`ItemStack`)

**Returns:** `private static int`

### getContainer

```java
static Container getContainer(CommandSourceStack p_180328_, BlockPos p_180329_, Dynamic3CommandExceptionType p_180330_)
```

**Parameters:**

- `p_180328_` (`CommandSourceStack`)
- `p_180329_` (`BlockPos`)
- `p_180330_` (`Dynamic3CommandExceptionType`)

**Returns:** `static Container`

### setEntityItem

```java
private static int setEntityItem(CommandSourceStack p_180332_, Collection<? extends Entity> p_180333_, int p_180334_, ItemStack p_180335_)
```

**Parameters:**

- `p_180332_` (`CommandSourceStack`)
- `p_180333_` (`Collection<? extends Entity>`)
- `p_180334_` (`int`)
- `p_180335_` (`ItemStack`)

**Returns:** `private static int`

### blockToEntities

```java
private static int blockToEntities(CommandSourceStack p_180315_, BlockPos p_180316_, int p_180317_, Collection<? extends Entity> p_180318_, int p_180319_)
```

**Parameters:**

- `p_180315_` (`CommandSourceStack`)
- `p_180316_` (`BlockPos`)
- `p_180317_` (`int`)
- `p_180318_` (`Collection<? extends Entity>`)
- `p_180319_` (`int`)

**Returns:** `private static int`

### blockToEntities

```java
private static int blockToEntities(CommandSourceStack p_180321_, BlockPos p_180322_, int p_180323_, Collection<? extends Entity> p_180324_, int p_180325_, Holder<LootItemFunction> p_336168_)
```

**Parameters:**

- `p_180321_` (`CommandSourceStack`)
- `p_180322_` (`BlockPos`)
- `p_180323_` (`int`)
- `p_180324_` (`Collection<? extends Entity>`)
- `p_180325_` (`int`)
- `p_336168_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### blockToBlock

```java
private static int blockToBlock(CommandSourceStack p_180302_, BlockPos p_180303_, int p_180304_, BlockPos p_180305_, int p_180306_)
```

**Parameters:**

- `p_180302_` (`CommandSourceStack`)
- `p_180303_` (`BlockPos`)
- `p_180304_` (`int`)
- `p_180305_` (`BlockPos`)
- `p_180306_` (`int`)

**Returns:** `private static int`

### blockToBlock

```java
private static int blockToBlock(CommandSourceStack p_180308_, BlockPos p_180309_, int p_180310_, BlockPos p_180311_, int p_180312_, Holder<LootItemFunction> p_335838_)
```

**Parameters:**

- `p_180308_` (`CommandSourceStack`)
- `p_180309_` (`BlockPos`)
- `p_180310_` (`int`)
- `p_180311_` (`BlockPos`)
- `p_180312_` (`int`)
- `p_335838_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### entityToBlock

```java
private static int entityToBlock(CommandSourceStack p_180258_, Entity p_180259_, int p_180260_, BlockPos p_180261_, int p_180262_)
```

**Parameters:**

- `p_180258_` (`CommandSourceStack`)
- `p_180259_` (`Entity`)
- `p_180260_` (`int`)
- `p_180261_` (`BlockPos`)
- `p_180262_` (`int`)

**Returns:** `private static int`

### entityToBlock

```java
private static int entityToBlock(CommandSourceStack p_180264_, Entity p_180265_, int p_180266_, BlockPos p_180267_, int p_180268_, Holder<LootItemFunction> p_335965_)
```

**Parameters:**

- `p_180264_` (`CommandSourceStack`)
- `p_180265_` (`Entity`)
- `p_180266_` (`int`)
- `p_180267_` (`BlockPos`)
- `p_180268_` (`int`)
- `p_335965_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### entityToEntities

```java
private static int entityToEntities(CommandSourceStack p_180271_, Entity p_180272_, int p_180273_, Collection<? extends Entity> p_180274_, int p_180275_)
```

**Parameters:**

- `p_180271_` (`CommandSourceStack`)
- `p_180272_` (`Entity`)
- `p_180273_` (`int`)
- `p_180274_` (`Collection<? extends Entity>`)
- `p_180275_` (`int`)

**Returns:** `private static int`

### entityToEntities

```java
private static int entityToEntities(CommandSourceStack p_180277_, Entity p_180278_, int p_180279_, Collection<? extends Entity> p_180280_, int p_180281_, Holder<LootItemFunction> p_335469_)
```

**Parameters:**

- `p_180277_` (`CommandSourceStack`)
- `p_180278_` (`Entity`)
- `p_180279_` (`int`)
- `p_180280_` (`Collection<? extends Entity>`)
- `p_180281_` (`int`)
- `p_335469_` (`Holder<LootItemFunction>`)

**Returns:** `private static int`

### applyModifier

```java
private static ItemStack applyModifier(CommandSourceStack p_180284_, Holder<LootItemFunction> p_335682_, ItemStack p_180286_)
```

**Parameters:**

- `p_180284_` (`CommandSourceStack`)
- `p_335682_` (`Holder<LootItemFunction>`)
- `p_180286_` (`ItemStack`)

**Returns:** `private static ItemStack`

### getEntityItem

```java
private static ItemStack getEntityItem(Entity p_180246_, int p_180247_)
```

**Parameters:**

- `p_180246_` (`Entity`)
- `p_180247_` (`int`)

**Returns:** `private static ItemStack`

### getBlockItem

```java
private static ItemStack getBlockItem(CommandSourceStack p_180288_, BlockPos p_180289_, int p_180290_)
```

**Parameters:**

- `p_180288_` (`CommandSourceStack`)
- `p_180289_` (`BlockPos`)
- `p_180290_` (`int`)

**Returns:** `private static ItemStack`
