# DebugPackets

**Package:** `net.minecraft.network.protocol.game`
**Type:** class

## Methods

### sendGameTestAddMarker

```java
public static void sendGameTestAddMarker(ServerLevel p_133683_, BlockPos p_133684_, String p_133685_, int p_133686_, int p_133687_)
```

**Parameters:**

- `p_133683_` (`ServerLevel`)
- `p_133684_` (`BlockPos`)
- `p_133685_` (`String`)
- `p_133686_` (`int`)
- `p_133687_` (`int`)

**Returns:** `public static void`

### sendGameTestClearPacket

```java
public static void sendGameTestClearPacket(ServerLevel p_133675_)
```

**Parameters:**

- `p_133675_` (`ServerLevel`)

**Returns:** `public static void`

### sendPoiPacketsForChunk

```java
public static void sendPoiPacketsForChunk(ServerLevel p_133677_, ChunkPos p_133678_)
```

**Parameters:**

- `p_133677_` (`ServerLevel`)
- `p_133678_` (`ChunkPos`)

**Returns:** `public static void`

### sendPoiAddedPacket

```java
public static void sendPoiAddedPacket(ServerLevel p_133680_, BlockPos p_133681_)
```

**Parameters:**

- `p_133680_` (`ServerLevel`)
- `p_133681_` (`BlockPos`)

**Returns:** `public static void`

### sendVillageSectionsPacket

```java
 sendVillageSectionsPacket()
```

**Returns:** ``

### sendPoiRemovedPacket

```java
public static void sendPoiRemovedPacket(ServerLevel p_133717_, BlockPos p_133718_)
```

**Parameters:**

- `p_133717_` (`ServerLevel`)
- `p_133718_` (`BlockPos`)

**Returns:** `public static void`

### sendVillageSectionsPacket

```java
 sendVillageSectionsPacket()
```

**Returns:** ``

### sendPoiTicketCountPacket

```java
public static void sendPoiTicketCountPacket(ServerLevel p_133720_, BlockPos p_133721_)
```

**Parameters:**

- `p_133720_` (`ServerLevel`)
- `p_133721_` (`BlockPos`)

**Returns:** `public static void`

### sendVillageSectionsPacket

```java
 sendVillageSectionsPacket()
```

**Returns:** ``

### sendVillageSectionsPacket

```java
private static void sendVillageSectionsPacket(ServerLevel p_133723_, BlockPos p_133724_)
```

**Parameters:**

- `p_133723_` (`ServerLevel`)
- `p_133724_` (`BlockPos`)

**Returns:** `private static void`

### sendPathFindingPacket

```java
public static void sendPathFindingPacket(Level p_133704_, Mob p_133705_, Path p_133706_, float p_133707_)
```

**Parameters:**

- `p_133704_` (`Level`)
- `p_133705_` (`Mob`)
- `p_133706_` (`Path`)
- `p_133707_` (`float`)

**Returns:** `public static void`

### sendNeighborsUpdatePacket

```java
public static void sendNeighborsUpdatePacket(Level p_133709_, BlockPos p_133710_)
```

**Parameters:**

- `p_133709_` (`Level`)
- `p_133710_` (`BlockPos`)

**Returns:** `public static void`

### sendStructurePacket

```java
public static void sendStructurePacket(WorldGenLevel p_133712_, StructureStart p_133713_)
```

**Parameters:**

- `p_133712_` (`WorldGenLevel`)
- `p_133713_` (`StructureStart`)

**Returns:** `public static void`

### sendGoalSelector

```java
public static void sendGoalSelector(Level p_133700_, Mob p_133701_, GoalSelector p_133702_)
```

**Parameters:**

- `p_133700_` (`Level`)
- `p_133701_` (`Mob`)
- `p_133702_` (`GoalSelector`)

**Returns:** `public static void`

### sendRaids

```java
public static void sendRaids(ServerLevel p_133689_, Collection<Raid> p_133690_)
```

**Parameters:**

- `p_133689_` (`ServerLevel`)
- `p_133690_` (`Collection<Raid>`)

**Returns:** `public static void`

### sendEntityBrain

```java
public static void sendEntityBrain(LivingEntity p_133696_)
```

**Parameters:**

- `p_133696_` (`LivingEntity`)

**Returns:** `public static void`

### sendBeeInfo

```java
public static void sendBeeInfo(Bee p_133698_)
```

**Parameters:**

- `p_133698_` (`Bee`)

**Returns:** `public static void`

### sendBreezeInfo

```java
public static void sendBreezeInfo(Breeze p_312299_)
```

**Parameters:**

- `p_312299_` (`Breeze`)

**Returns:** `public static void`

### sendGameEventInfo

```java
public static void sendGameEventInfo(Level p_237888_, Holder<GameEvent> p_316607_, Vec3 p_237890_)
```

**Parameters:**

- `p_237888_` (`Level`)
- `p_316607_` (`Holder<GameEvent>`)
- `p_237890_` (`Vec3`)

**Returns:** `public static void`

### sendGameEventListenerInfo

```java
public static void sendGameEventListenerInfo(Level p_179508_, GameEventListener p_179509_)
```

**Parameters:**

- `p_179508_` (`Level`)
- `p_179509_` (`GameEventListener`)

**Returns:** `public static void`

### sendHiveInfo

```java
public static void sendHiveInfo(Level p_179511_, BlockPos p_179512_, BlockState p_179513_, BeehiveBlockEntity p_179514_)
```

**Parameters:**

- `p_179511_` (`Level`)
- `p_179512_` (`BlockPos`)
- `p_179513_` (`BlockState`)
- `p_179514_` (`BeehiveBlockEntity`)

**Returns:** `public static void`

### getMemoryDescriptions

```java
private static List<String> getMemoryDescriptions(LivingEntity p_179496_, long p_179497_)
```

**Parameters:**

- `p_179496_` (`LivingEntity`)
- `p_179497_` (`long`)

**Returns:** `private static List<String>`

### getShortDescription

```java
private static String getShortDescription(ServerLevel p_179493_, Object p_179494_)
```

**Parameters:**

- `p_179493_` (`ServerLevel`)
- `p_179494_` (`Object`)

**Returns:** `private static String`

### sendPacketToAllPlayers

```java
private static void sendPacketToAllPlayers(ServerLevel p_133692_, CustomPacketPayload p_296119_)
```

**Parameters:**

- `p_133692_` (`ServerLevel`)
- `p_296119_` (`CustomPacketPayload`)

**Returns:** `private static void`
