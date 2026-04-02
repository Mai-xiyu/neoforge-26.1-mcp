# BeeDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BeeDebugRenderer

```java
public BeeDebugRenderer(Minecraft p_113053_)
```

**Parameters:**

- `p_113053_` (`Minecraft`)

**Returns:** `public`

### clear

```java
public void clear()
```

### addOrUpdateHiveInfo

```java
public void addOrUpdateHiveInfo(HiveDebugPayload.HiveInfo p_294147_, long p_296079_)
```

**Parameters:**

- `p_294147_` (`HiveDebugPayload.HiveInfo`)
- `p_296079_` (`long`)

**Returns:** `public void`

### addOrUpdateBeeInfo

```java
public void addOrUpdateBeeInfo(BeeDebugPayload.BeeInfo p_294571_)
```

**Parameters:**

- `p_294571_` (`BeeDebugPayload.BeeInfo`)

**Returns:** `public void`

### removeBeeInfo

```java
public void removeBeeInfo(int p_173764_)
```

**Parameters:**

- `p_173764_` (`int`)

**Returns:** `public void`

### render

```java
public void render(PoseStack p_113061_, MultiBufferSource p_113062_, double p_113063_, double p_113064_, double p_113065_)
```

**Parameters:**

- `p_113061_` (`PoseStack`)
- `p_113062_` (`MultiBufferSource`)
- `p_113063_` (`double`)
- `p_113064_` (`double`)
- `p_113065_` (`double`)

### clearRemovedBees

```java
private void clearRemovedBees()
```

**Returns:** `private void`

### clearRemovedHives

```java
private void clearRemovedHives()
```

**Returns:** `private void`

### doRender

```java
private void doRender(PoseStack p_270886_, MultiBufferSource p_270808_)
```

**Parameters:**

- `p_270886_` (`PoseStack`)
- `p_270808_` (`MultiBufferSource`)

**Returns:** `private void`

### highlightHive

```java
 highlightHive()
```

**Returns:** ``

### createHiveBlacklistMap

```java
private Map<BlockPos, Set<UUID>> createHiveBlacklistMap()
```

**Returns:** `private Map<BlockPos, Set<UUID>>`

### renderFlowerInfos

```java
private void renderFlowerInfos(PoseStack p_270578_, MultiBufferSource p_270098_)
```

**Parameters:**

- `p_270578_` (`PoseStack`)
- `p_270098_` (`MultiBufferSource`)

**Returns:** `private void`

### renderTextOverPos

```java
 renderTextOverPos()
```

**Returns:** ``

### getBeeUuidsAsString

```java
private static String getBeeUuidsAsString(Collection<UUID> p_113116_)
```

**Parameters:**

- `p_113116_` (`Collection<UUID>`)

**Returns:** `private static String`

### highlightHive

```java
private static void highlightHive(PoseStack p_270133_, MultiBufferSource p_270766_, BlockPos p_270687_)
```

**Parameters:**

- `p_270133_` (`PoseStack`)
- `p_270766_` (`MultiBufferSource`)
- `p_270687_` (`BlockPos`)

**Returns:** `private static void`

### renderGhostHive

```java
private void renderGhostHive(PoseStack p_270949_, MultiBufferSource p_270718_, BlockPos p_270550_, List<String> p_270221_)
```

**Parameters:**

- `p_270949_` (`PoseStack`)
- `p_270718_` (`MultiBufferSource`)
- `p_270550_` (`BlockPos`)
- `p_270221_` (`List<String>`)

**Returns:** `private void`

### renderTextOverPos

```java
 renderTextOverPos(p_270221_ + "")
```

**Parameters:**

- `""` (`p_270221_ +`)

**Returns:** ``

### renderTextOverPos

```java
 renderTextOverPos("Ghost Hive")
```

**Parameters:**

- `Hive"` (`"Ghost`)

**Returns:** ``

### renderHiveInfo

```java
private void renderHiveInfo(PoseStack p_270194_, MultiBufferSource p_270431_, HiveDebugPayload.HiveInfo p_295856_, Collection<UUID> p_270946_)
```

**Parameters:**

- `p_270194_` (`PoseStack`)
- `p_270431_` (`MultiBufferSource`)
- `p_295856_` (`HiveDebugPayload.HiveInfo`)
- `p_270946_` (`Collection<UUID>`)

**Returns:** `private void`

### renderTextOverHive

```java
 renderTextOverHive("In: -")
```

**Parameters:**

- `-"` (`"In:`)

**Returns:** ``

### renderTextOverHive

```java
 renderTextOverHive("In: 1 bee")
```

**Parameters:**

- `bee"` (`"In: 1`)

**Returns:** ``

### renderPath

```java
private void renderPath(PoseStack p_270424_, MultiBufferSource p_270123_, BeeDebugPayload.BeeInfo p_294313_)
```

**Parameters:**

- `p_270424_` (`PoseStack`)
- `p_270123_` (`MultiBufferSource`)
- `p_294313_` (`BeeDebugPayload.BeeInfo`)

**Returns:** `private void`

### renderBeeInfo

```java
private void renderBeeInfo(PoseStack p_270154_, MultiBufferSource p_270397_, BeeDebugPayload.BeeInfo p_294247_)
```

**Parameters:**

- `p_270154_` (`PoseStack`)
- `p_270397_` (`MultiBufferSource`)
- `p_294247_` (`BeeDebugPayload.BeeInfo`)

**Returns:** `private void`

### renderTextOverHive

```java
private static void renderTextOverHive(PoseStack p_270915_, MultiBufferSource p_270663_, String p_270119_, HiveDebugPayload.HiveInfo p_294995_, int p_270930_, int p_270094_)
```

**Parameters:**

- `p_270915_` (`PoseStack`)
- `p_270663_` (`MultiBufferSource`)
- `p_270119_` (`String`)
- `p_294995_` (`HiveDebugPayload.HiveInfo`)
- `p_270930_` (`int`)
- `p_270094_` (`int`)

**Returns:** `private static void`

### renderTextOverPos

```java
private static void renderTextOverPos(PoseStack p_270438_, MultiBufferSource p_270244_, String p_270486_, BlockPos p_270062_, int p_270574_, int p_270228_)
```

**Parameters:**

- `p_270438_` (`PoseStack`)
- `p_270244_` (`MultiBufferSource`)
- `p_270486_` (`String`)
- `p_270062_` (`BlockPos`)
- `p_270574_` (`int`)
- `p_270228_` (`int`)

**Returns:** `private static void`

### renderTextOverMob

```java
private static void renderTextOverMob(PoseStack p_270426_, MultiBufferSource p_270600_, Position p_270548_, int p_270592_, String p_270198_, int p_270792_, float p_270938_)
```

**Parameters:**

- `p_270426_` (`PoseStack`)
- `p_270600_` (`MultiBufferSource`)
- `p_270548_` (`Position`)
- `p_270592_` (`int`)
- `p_270198_` (`String`)
- `p_270792_` (`int`)
- `p_270938_` (`float`)

**Returns:** `private static void`

### getCamera

```java
private Camera getCamera()
```

**Returns:** `private Camera`

### getHiveMemberNames

```java
private Set<String> getHiveMemberNames(HiveDebugPayload.HiveInfo p_296213_)
```

**Parameters:**

- `p_296213_` (`HiveDebugPayload.HiveInfo`)

**Returns:** `private Set<String>`

### getPosDescription

```java
private String getPosDescription(BeeDebugPayload.BeeInfo p_296210_, BlockPos p_113070_)
```

**Parameters:**

- `p_296210_` (`BeeDebugPayload.BeeInfo`)
- `p_113070_` (`BlockPos`)

**Returns:** `private String`

### isBeeSelected

```java
private boolean isBeeSelected(BeeDebugPayload.BeeInfo p_295996_)
```

**Parameters:**

- `p_295996_` (`BeeDebugPayload.BeeInfo`)

**Returns:** `private boolean`

### isPlayerCloseEnoughToMob

```java
private boolean isPlayerCloseEnoughToMob(BeeDebugPayload.BeeInfo p_294724_)
```

**Parameters:**

- `p_294724_` (`BeeDebugPayload.BeeInfo`)

**Returns:** `private boolean`

### getHiveMembers

```java
private Collection<UUID> getHiveMembers(BlockPos p_113130_)
```

**Parameters:**

- `p_113130_` (`BlockPos`)

**Returns:** `private Collection<UUID>`

### getGhostHives

```java
private Map<BlockPos, List<String>> getGhostHives()
```

**Returns:** `private Map<BlockPos, List<String>>`

### updateLastLookedAtUuid

```java
private void updateLastLookedAtUuid()
```

**Returns:** `private void`

### HiveDebugInfo

```java
static record HiveDebugInfo(HiveDebugPayload.HiveInfo info, long lastSeen)
```

**Parameters:**

- `info` (`HiveDebugPayload.HiveInfo`)
- `lastSeen` (`long`)

**Returns:** `record`
