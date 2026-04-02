# GamePacketTypes

**Package:** `net.minecraft.network.protocol.game`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CLIENTBOUND_BUNDLE` | `PacketType<ClientboundBundlePacket>` |  |
| `CLIENTBOUND_BUNDLE_DELIMITER` | `PacketType<ClientboundBundleDelimiterPacket>` |  |
| `CLIENTBOUND_ADD_ENTITY` | `PacketType<ClientboundAddEntityPacket>` |  |
| `CLIENTBOUND_ADD_EXPERIENCE_ORB` | `PacketType<ClientboundAddExperienceOrbPacket>` |  |
| `CLIENTBOUND_ANIMATE` | `PacketType<ClientboundAnimatePacket>` |  |
| `CLIENTBOUND_AWARD_STATS` | `PacketType<ClientboundAwardStatsPacket>` |  |
| `CLIENTBOUND_BLOCK_CHANGED_ACK` | `PacketType<ClientboundBlockChangedAckPacket>` |  |
| `CLIENTBOUND_BLOCK_DESTRUCTION` | `PacketType<ClientboundBlockDestructionPacket>` |  |
| `CLIENTBOUND_BLOCK_ENTITY_DATA` | `PacketType<ClientboundBlockEntityDataPacket>` |  |
| `CLIENTBOUND_BLOCK_EVENT` | `PacketType<ClientboundBlockEventPacket>` |  |
| `CLIENTBOUND_BLOCK_UPDATE` | `PacketType<ClientboundBlockUpdatePacket>` |  |
| `CLIENTBOUND_BOSS_EVENT` | `PacketType<ClientboundBossEventPacket>` |  |
| `CLIENTBOUND_CHANGE_DIFFICULTY` | `PacketType<ClientboundChangeDifficultyPacket>` |  |
| `CLIENTBOUND_CHUNK_BATCH_FINISHED` | `PacketType<ClientboundChunkBatchFinishedPacket>` |  |
| `CLIENTBOUND_CHUNK_BATCH_START` | `PacketType<ClientboundChunkBatchStartPacket>` |  |
| `CLIENTBOUND_CHUNKS_BIOMES` | `PacketType<ClientboundChunksBiomesPacket>` |  |
| `CLIENTBOUND_CLEAR_TITLES` | `PacketType<ClientboundClearTitlesPacket>` |  |
| `CLIENTBOUND_COMMAND_SUGGESTIONS` | `PacketType<ClientboundCommandSuggestionsPacket>` |  |
| `CLIENTBOUND_COMMANDS` | `PacketType<ClientboundCommandsPacket>` |  |
| `CLIENTBOUND_CONTAINER_CLOSE` | `PacketType<ClientboundContainerClosePacket>` |  |
| `CLIENTBOUND_CONTAINER_SET_CONTENT` | `PacketType<ClientboundContainerSetContentPacket>` |  |
| `CLIENTBOUND_CONTAINER_SET_DATA` | `PacketType<ClientboundContainerSetDataPacket>` |  |
| `CLIENTBOUND_CONTAINER_SET_SLOT` | `PacketType<ClientboundContainerSetSlotPacket>` |  |
| `CLIENTBOUND_COOLDOWN` | `PacketType<ClientboundCooldownPacket>` |  |
| `CLIENTBOUND_CUSTOM_CHAT_COMPLETIONS` | `PacketType<ClientboundCustomChatCompletionsPacket>` |  |
| `CLIENTBOUND_DAMAGE_EVENT` | `PacketType<ClientboundDamageEventPacket>` |  |
| `CLIENTBOUND_DEBUG_SAMPLE` | `PacketType<ClientboundDebugSamplePacket>` |  |
| `CLIENTBOUND_DELETE_CHAT` | `PacketType<ClientboundDeleteChatPacket>` |  |
| `CLIENTBOUND_DISGUISED_CHAT` | `PacketType<ClientboundDisguisedChatPacket>` |  |
| `CLIENTBOUND_ENTITY_EVENT` | `PacketType<ClientboundEntityEventPacket>` |  |
| `CLIENTBOUND_EXPLODE` | `PacketType<ClientboundExplodePacket>` |  |
| `CLIENTBOUND_FORGET_LEVEL_CHUNK` | `PacketType<ClientboundForgetLevelChunkPacket>` |  |
| `CLIENTBOUND_GAME_EVENT` | `PacketType<ClientboundGameEventPacket>` |  |
| `CLIENTBOUND_HORSE_SCREEN_OPEN` | `PacketType<ClientboundHorseScreenOpenPacket>` |  |
| `CLIENTBOUND_HURT_ANIMATION` | `PacketType<ClientboundHurtAnimationPacket>` |  |
| `CLIENTBOUND_INITIALIZE_BORDER` | `PacketType<ClientboundInitializeBorderPacket>` |  |
| `CLIENTBOUND_LEVEL_CHUNK_WITH_LIGHT` | `PacketType<ClientboundLevelChunkWithLightPacket>` |  |

## Methods

### createClientbound

```java
private static <T extends Packet<ClientGamePacketListener>> PacketType<T> createClientbound(String p_319846_)
```

**Parameters:**

- `p_319846_` (`String`)

**Returns:** `private static <T extends Packet<ClientGamePacketListener>> PacketType<T>`

### createServerbound

```java
private static <T extends Packet<ServerGamePacketListener>> PacketType<T> createServerbound(String p_320667_)
```

**Parameters:**

- `p_320667_` (`String`)

**Returns:** `private static <T extends Packet<ServerGamePacketListener>> PacketType<T>`
