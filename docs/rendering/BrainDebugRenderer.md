# BrainDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BrainDebugRenderer

```java
public BrainDebugRenderer(Minecraft p_113200_)
```

**Parameters:**

- `p_113200_` (`Minecraft`)

**Returns:** `public`

### clear

```java
public void clear()
```

### addPoi

```java
public void addPoi(BrainDebugRenderer.PoiInfo p_113227_)
```

**Parameters:**

- `p_113227_` (`BrainDebugRenderer.PoiInfo`)

**Returns:** `public void`

### removePoi

```java
public void removePoi(BlockPos p_113229_)
```

**Parameters:**

- `p_113229_` (`BlockPos`)

**Returns:** `public void`

### setFreeTicketCount

```java
public void setFreeTicketCount(BlockPos p_113231_, int p_113232_)
```

**Parameters:**

- `p_113231_` (`BlockPos`)
- `p_113232_` (`int`)

**Returns:** `public void`

### addOrUpdateBrainDump

```java
public void addOrUpdateBrainDump(BrainDebugPayload.BrainDump p_294334_)
```

**Parameters:**

- `p_294334_` (`BrainDebugPayload.BrainDump`)

**Returns:** `public void`

### removeBrainDump

```java
public void removeBrainDump(int p_173811_)
```

**Parameters:**

- `p_173811_` (`int`)

**Returns:** `public void`

### render

```java
public void render(PoseStack p_113214_, MultiBufferSource p_113215_, double p_113216_, double p_113217_, double p_113218_)
```

**Parameters:**

- `p_113214_` (`PoseStack`)
- `p_113215_` (`MultiBufferSource`)
- `p_113216_` (`double`)
- `p_113217_` (`double`)
- `p_113218_` (`double`)

### clearRemovedEntities

```java
private void clearRemovedEntities()
```

**Returns:** `private void`

### doRender

```java
private void doRender(PoseStack p_270747_, MultiBufferSource p_270289_, double p_270303_, double p_270416_, double p_270542_)
```

**Parameters:**

- `p_270747_` (`PoseStack`)
- `p_270289_` (`MultiBufferSource`)
- `p_270303_` (`double`)
- `p_270416_` (`double`)
- `p_270542_` (`double`)

**Returns:** `private void`

### highlightPoi

```java
 highlightPoi()
```

**Returns:** ``

### highlightPoi

```java
private static void highlightPoi(PoseStack p_270066_, MultiBufferSource p_270965_, BlockPos p_270159_)
```

**Parameters:**

- `p_270066_` (`PoseStack`)
- `p_270965_` (`MultiBufferSource`)
- `p_270159_` (`BlockPos`)

**Returns:** `private static void`

### renderGhostPoi

```java
private void renderGhostPoi(PoseStack p_270206_, MultiBufferSource p_270976_, BlockPos p_270670_, List<String> p_270882_)
```

**Parameters:**

- `p_270206_` (`PoseStack`)
- `p_270976_` (`MultiBufferSource`)
- `p_270670_` (`BlockPos`)
- `p_270882_` (`List<String>`)

**Returns:** `private void`

### renderTextOverPos

```java
 renderTextOverPos(p_270882_ + "")
```

**Parameters:**

- `""` (`p_270882_ +`)

**Returns:** ``

### renderTextOverPos

```java
 renderTextOverPos("Ghost POI")
```

**Parameters:**

- `POI"` (`"Ghost`)

**Returns:** ``

### renderPoiInfo

```java
private void renderPoiInfo(PoseStack p_270999_, MultiBufferSource p_270627_, BrainDebugRenderer.PoiInfo p_270986_)
```

**Parameters:**

- `p_270999_` (`PoseStack`)
- `p_270627_` (`MultiBufferSource`)
- `p_270986_` (`BrainDebugRenderer.PoiInfo`)

**Returns:** `private void`

### renderTextOverPoi

```java
 renderTextOverPoi("Owners: " + set)
```

**Parameters:**

- `set` (`"Owners: " +`)

**Returns:** ``

### renderTextOverPoi

```java
 renderTextOverPoi("Candidates: " + set1)
```

**Parameters:**

- `set1` (`"Candidates: " +`)

**Returns:** ``

### renderTextOverPoi

```java
 renderTextOverPoi("Free tickets: " + p_270986_.freeTicketCount)
```

**Parameters:**

- `p_270986_.freeTicketCount` (`"Free tickets: " +`)

**Returns:** ``

### renderTextOverPoi

```java
 renderTextOverPoi()
```

**Returns:** ``

### renderPath

```java
private void renderPath(PoseStack p_270435_, MultiBufferSource p_270439_, BrainDebugPayload.BrainDump p_294227_, double p_270109_, double p_270342_, double p_270834_)
```

**Parameters:**

- `p_270435_` (`PoseStack`)
- `p_270439_` (`MultiBufferSource`)
- `p_294227_` (`BrainDebugPayload.BrainDump`)
- `p_270109_` (`double`)
- `p_270342_` (`double`)
- `p_270834_` (`double`)

**Returns:** `private void`

### renderBrainInfo

```java
private void renderBrainInfo(PoseStack p_270145_, MultiBufferSource p_270489_, BrainDebugPayload.BrainDump p_294452_, double p_270922_, double p_270468_, double p_270838_)
```

**Parameters:**

- `p_270145_` (`PoseStack`)
- `p_270489_` (`MultiBufferSource`)
- `p_294452_` (`BrainDebugPayload.BrainDump`)
- `p_270922_` (`double`)
- `p_270468_` (`double`)
- `p_270838_` (`double`)

**Returns:** `private void`

### renderTextOverPoi

```java
private static void renderTextOverPoi(PoseStack p_270498_, MultiBufferSource p_270609_, String p_270070_, BrainDebugRenderer.PoiInfo p_270677_, int p_270143_, int p_271011_)
```

**Parameters:**

- `p_270498_` (`PoseStack`)
- `p_270609_` (`MultiBufferSource`)
- `p_270070_` (`String`)
- `p_270677_` (`BrainDebugRenderer.PoiInfo`)
- `p_270143_` (`int`)
- `p_271011_` (`int`)

**Returns:** `private static void`

### renderTextOverPos

```java
 renderTextOverPos()
```

**Returns:** ``

### renderTextOverPos

```java
private static void renderTextOverPos(PoseStack p_270640_, MultiBufferSource p_270809_, String p_270632_, BlockPos p_270082_, int p_270078_, int p_270440_)
```

**Parameters:**

- `p_270640_` (`PoseStack`)
- `p_270809_` (`MultiBufferSource`)
- `p_270632_` (`String`)
- `p_270082_` (`BlockPos`)
- `p_270078_` (`int`)
- `p_270440_` (`int`)

**Returns:** `private static void`

### renderTextOverMob

```java
private static void renderTextOverMob(PoseStack p_270664_, MultiBufferSource p_270816_, Position p_270715_, int p_270126_, String p_270487_, int p_270218_, float p_270737_)
```

**Parameters:**

- `p_270664_` (`PoseStack`)
- `p_270816_` (`MultiBufferSource`)
- `p_270715_` (`Position`)
- `p_270126_` (`int`)
- `p_270487_` (`String`)
- `p_270218_` (`int`)
- `p_270737_` (`float`)

**Returns:** `private static void`

### getTicketHolderNames

```java
private Set<String> getTicketHolderNames(BrainDebugRenderer.PoiInfo p_113283_)
```

**Parameters:**

- `p_113283_` (`BrainDebugRenderer.PoiInfo`)

**Returns:** `private Set<String>`

### getPotentialTicketHolderNames

```java
private Set<String> getPotentialTicketHolderNames(BrainDebugRenderer.PoiInfo p_113288_)
```

**Parameters:**

- `p_113288_` (`BrainDebugRenderer.PoiInfo`)

**Returns:** `private Set<String>`

### isMobSelected

```java
private boolean isMobSelected(BrainDebugPayload.BrainDump p_296487_)
```

**Parameters:**

- `p_296487_` (`BrainDebugPayload.BrainDump`)

**Returns:** `private boolean`

### isPlayerCloseEnoughToMob

```java
private boolean isPlayerCloseEnoughToMob(BrainDebugPayload.BrainDump p_296011_)
```

**Parameters:**

- `p_296011_` (`BrainDebugPayload.BrainDump`)

**Returns:** `private boolean`

### getTicketHolders

```java
private Collection<UUID> getTicketHolders(BlockPos p_113285_)
```

**Parameters:**

- `p_113285_` (`BlockPos`)

**Returns:** `private Collection<UUID>`

### getPotentialTicketHolders

```java
private Collection<UUID> getPotentialTicketHolders(BlockPos p_113290_)
```

**Parameters:**

- `p_113290_` (`BlockPos`)

**Returns:** `private Collection<UUID>`

### getGhostPois

```java
private Map<BlockPos, List<String>> getGhostPois()
```

**Returns:** `private Map<BlockPos, List<String>>`

### updateLastLookedAtUuid

```java
private void updateLastLookedAtUuid()
```

**Returns:** `private void`

### PoiInfo

```java
public PoiInfo(BlockPos p_113337_, String p_113338_, int p_113339_)
```

**Parameters:**

- `p_113337_` (`BlockPos`)
- `p_113338_` (`String`)
- `p_113339_` (`int`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PoiInfo` | class |  |
