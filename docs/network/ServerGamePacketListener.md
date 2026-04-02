# ServerGamePacketListener

**Package:** `net.minecraft.network.protocol.game`
**Type:** interface
**Extends:** `ServerPingPacketListener, ServerCommonPacketListener, net.neoforged.neoforge.common.extensions.IServerGamePacketListenerExtension`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleAnimate

```java
void handleAnimate(ServerboundSwingPacket p_133781_)
```

**Parameters:**

- `p_133781_` (`ServerboundSwingPacket`)

### handleChat

```java
void handleChat(ServerboundChatPacket p_133743_)
```

**Parameters:**

- `p_133743_` (`ServerboundChatPacket`)

### handleChatCommand

```java
void handleChatCommand(ServerboundChatCommandPacket p_237920_)
```

**Parameters:**

- `p_237920_` (`ServerboundChatCommandPacket`)

### handleSignedChatCommand

```java
void handleSignedChatCommand(ServerboundChatCommandSignedPacket p_338819_)
```

**Parameters:**

- `p_338819_` (`ServerboundChatCommandSignedPacket`)

### handleChatAck

```java
void handleChatAck(ServerboundChatAckPacket p_242214_)
```

**Parameters:**

- `p_242214_` (`ServerboundChatAckPacket`)

### handleClientCommand

```java
void handleClientCommand(ServerboundClientCommandPacket p_133744_)
```

**Parameters:**

- `p_133744_` (`ServerboundClientCommandPacket`)

### handleContainerButtonClick

```java
void handleContainerButtonClick(ServerboundContainerButtonClickPacket p_133748_)
```

**Parameters:**

- `p_133748_` (`ServerboundContainerButtonClickPacket`)

### handleContainerClick

```java
void handleContainerClick(ServerboundContainerClickPacket p_133749_)
```

**Parameters:**

- `p_133749_` (`ServerboundContainerClickPacket`)

### handlePlaceRecipe

```java
void handlePlaceRecipe(ServerboundPlaceRecipePacket p_133762_)
```

**Parameters:**

- `p_133762_` (`ServerboundPlaceRecipePacket`)

### handleContainerClose

```java
void handleContainerClose(ServerboundContainerClosePacket p_133750_)
```

**Parameters:**

- `p_133750_` (`ServerboundContainerClosePacket`)

### handleInteract

```java
void handleInteract(ServerboundInteractPacket p_133754_)
```

**Parameters:**

- `p_133754_` (`ServerboundInteractPacket`)

### handleMovePlayer

```java
void handleMovePlayer(ServerboundMovePlayerPacket p_133758_)
```

**Parameters:**

- `p_133758_` (`ServerboundMovePlayerPacket`)

### handlePlayerAbilities

```java
void handlePlayerAbilities(ServerboundPlayerAbilitiesPacket p_133763_)
```

**Parameters:**

- `p_133763_` (`ServerboundPlayerAbilitiesPacket`)

### handlePlayerAction

```java
void handlePlayerAction(ServerboundPlayerActionPacket p_133764_)
```

**Parameters:**

- `p_133764_` (`ServerboundPlayerActionPacket`)

### handlePlayerCommand

```java
void handlePlayerCommand(ServerboundPlayerCommandPacket p_133765_)
```

**Parameters:**

- `p_133765_` (`ServerboundPlayerCommandPacket`)

### handlePlayerInput

```java
void handlePlayerInput(ServerboundPlayerInputPacket p_133766_)
```

**Parameters:**

- `p_133766_` (`ServerboundPlayerInputPacket`)

### handleSetCarriedItem

```java
void handleSetCarriedItem(ServerboundSetCarriedItemPacket p_133774_)
```

**Parameters:**

- `p_133774_` (`ServerboundSetCarriedItemPacket`)

### handleSetCreativeModeSlot

```java
void handleSetCreativeModeSlot(ServerboundSetCreativeModeSlotPacket p_133777_)
```

**Parameters:**

- `p_133777_` (`ServerboundSetCreativeModeSlotPacket`)

### handleSignUpdate

```java
void handleSignUpdate(ServerboundSignUpdatePacket p_133780_)
```

**Parameters:**

- `p_133780_` (`ServerboundSignUpdatePacket`)

### handleUseItemOn

```java
void handleUseItemOn(ServerboundUseItemOnPacket p_133783_)
```

**Parameters:**

- `p_133783_` (`ServerboundUseItemOnPacket`)

### handleUseItem

```java
void handleUseItem(ServerboundUseItemPacket p_133784_)
```

**Parameters:**

- `p_133784_` (`ServerboundUseItemPacket`)

### handleTeleportToEntityPacket

```java
void handleTeleportToEntityPacket(ServerboundTeleportToEntityPacket p_133782_)
```

**Parameters:**

- `p_133782_` (`ServerboundTeleportToEntityPacket`)

### handlePaddleBoat

```java
void handlePaddleBoat(ServerboundPaddleBoatPacket p_133760_)
```

**Parameters:**

- `p_133760_` (`ServerboundPaddleBoatPacket`)

### handleMoveVehicle

```java
void handleMoveVehicle(ServerboundMoveVehiclePacket p_133759_)
```

**Parameters:**

- `p_133759_` (`ServerboundMoveVehiclePacket`)

### handleAcceptTeleportPacket

```java
void handleAcceptTeleportPacket(ServerboundAcceptTeleportationPacket p_133740_)
```

**Parameters:**

- `p_133740_` (`ServerboundAcceptTeleportationPacket`)

### handleRecipeBookSeenRecipePacket

```java
void handleRecipeBookSeenRecipePacket(ServerboundRecipeBookSeenRecipePacket p_133768_)
```

**Parameters:**

- `p_133768_` (`ServerboundRecipeBookSeenRecipePacket`)

### handleRecipeBookChangeSettingsPacket

```java
void handleRecipeBookChangeSettingsPacket(ServerboundRecipeBookChangeSettingsPacket p_133767_)
```

**Parameters:**

- `p_133767_` (`ServerboundRecipeBookChangeSettingsPacket`)

### handleSeenAdvancements

```java
void handleSeenAdvancements(ServerboundSeenAdvancementsPacket p_133771_)
```

**Parameters:**

- `p_133771_` (`ServerboundSeenAdvancementsPacket`)

### handleCustomCommandSuggestions

```java
void handleCustomCommandSuggestions(ServerboundCommandSuggestionPacket p_133746_)
```

**Parameters:**

- `p_133746_` (`ServerboundCommandSuggestionPacket`)

### handleSetCommandBlock

```java
void handleSetCommandBlock(ServerboundSetCommandBlockPacket p_133775_)
```

**Parameters:**

- `p_133775_` (`ServerboundSetCommandBlockPacket`)

### handleSetCommandMinecart

```java
void handleSetCommandMinecart(ServerboundSetCommandMinecartPacket p_133776_)
```

**Parameters:**

- `p_133776_` (`ServerboundSetCommandMinecartPacket`)

### handlePickItem

```java
void handlePickItem(ServerboundPickItemPacket p_133761_)
```

**Parameters:**

- `p_133761_` (`ServerboundPickItemPacket`)

### handleRenameItem

```java
void handleRenameItem(ServerboundRenameItemPacket p_133769_)
```

**Parameters:**

- `p_133769_` (`ServerboundRenameItemPacket`)

### handleSetBeaconPacket

```java
void handleSetBeaconPacket(ServerboundSetBeaconPacket p_133773_)
```

**Parameters:**

- `p_133773_` (`ServerboundSetBeaconPacket`)

### handleSetStructureBlock

```java
void handleSetStructureBlock(ServerboundSetStructureBlockPacket p_133779_)
```

**Parameters:**

- `p_133779_` (`ServerboundSetStructureBlockPacket`)

### handleSelectTrade

```java
void handleSelectTrade(ServerboundSelectTradePacket p_133772_)
```

**Parameters:**

- `p_133772_` (`ServerboundSelectTradePacket`)

### handleEditBook

```java
void handleEditBook(ServerboundEditBookPacket p_133752_)
```

**Parameters:**

- `p_133752_` (`ServerboundEditBookPacket`)

### handleEntityTagQuery

```java
void handleEntityTagQuery(ServerboundEntityTagQueryPacket p_320502_)
```

**Parameters:**

- `p_320502_` (`ServerboundEntityTagQueryPacket`)

### handleContainerSlotStateChanged

```java
void handleContainerSlotStateChanged(ServerboundContainerSlotStateChangedPacket p_307234_)
```

**Parameters:**

- `p_307234_` (`ServerboundContainerSlotStateChangedPacket`)

### handleBlockEntityTagQuery

```java
void handleBlockEntityTagQuery(ServerboundBlockEntityTagQueryPacket p_320411_)
```

**Parameters:**

- `p_320411_` (`ServerboundBlockEntityTagQueryPacket`)

### handleSetJigsawBlock

```java
void handleSetJigsawBlock(ServerboundSetJigsawBlockPacket p_133778_)
```

**Parameters:**

- `p_133778_` (`ServerboundSetJigsawBlockPacket`)

### handleJigsawGenerate

```java
void handleJigsawGenerate(ServerboundJigsawGeneratePacket p_133755_)
```

**Parameters:**

- `p_133755_` (`ServerboundJigsawGeneratePacket`)

### handleChangeDifficulty

```java
void handleChangeDifficulty(ServerboundChangeDifficultyPacket p_133742_)
```

**Parameters:**

- `p_133742_` (`ServerboundChangeDifficultyPacket`)

### handleLockDifficulty

```java
void handleLockDifficulty(ServerboundLockDifficultyPacket p_133757_)
```

**Parameters:**

- `p_133757_` (`ServerboundLockDifficultyPacket`)

### handleChatSessionUpdate

```java
void handleChatSessionUpdate(ServerboundChatSessionUpdatePacket p_254226_)
```

**Parameters:**

- `p_254226_` (`ServerboundChatSessionUpdatePacket`)

### handleConfigurationAcknowledged

```java
void handleConfigurationAcknowledged(ServerboundConfigurationAcknowledgedPacket p_296161_)
```

**Parameters:**

- `p_296161_` (`ServerboundConfigurationAcknowledgedPacket`)

### handleChunkBatchReceived

```java
void handleChunkBatchReceived(ServerboundChunkBatchReceivedPacket p_294767_)
```

**Parameters:**

- `p_294767_` (`ServerboundChunkBatchReceivedPacket`)

### handleDebugSampleSubscription

```java
void handleDebugSampleSubscription(ServerboundDebugSampleSubscriptionPacket p_323727_)
```

**Parameters:**

- `p_323727_` (`ServerboundDebugSampleSubscriptionPacket`)
