# FakePlayer

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class
**Extends:** `ServerPlayer`

## Description

A basic fake server player implementation that can be used to simulate player actions.

## Methods

### FakePlayer

```java
public FakePlayer(ServerLevel level, GameProfile name)
```

**Parameters:**

- `level` (`ServerLevel`)
- `name` (`GameProfile`)

**Returns:** `public`

### displayClientMessage

```java
public void displayClientMessage(Component chatComponent, boolean actionBar)
```

**Parameters:**

- `chatComponent` (`Component`)
- `actionBar` (`boolean`)

### awardStat

```java
public void awardStat(Stat<?> stat, int amount)
```

**Parameters:**

- `stat` (`Stat<?>`)
- `amount` (`int`)

### isInvulnerableTo

```java
public boolean isInvulnerableTo(DamageSource source)
```

**Parameters:**

- `source` (`DamageSource`)

**Returns:** `boolean`

### canHarmPlayer

```java
public boolean canHarmPlayer(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `boolean`

### die

```java
public void die(DamageSource source)
```

**Parameters:**

- `source` (`DamageSource`)

### tick

```java
public void tick()
```

### updateOptions

```java
public void updateOptions(ClientInformation p_301998_)
```

**Parameters:**

- `p_301998_` (`ClientInformation`)

### openMenu

```java
public OptionalInt openMenu(MenuProvider menuProvider, Consumer<RegistryFriendlyByteBuf> extraDataWriter)
```

**Parameters:**

- `menuProvider` (`MenuProvider`)
- `extraDataWriter` (`Consumer<RegistryFriendlyByteBuf>`)

**Returns:** `OptionalInt`

### openHorseInventory

```java
public void openHorseInventory(AbstractHorse horse, Container container)
```

**Parameters:**

- `horse` (`AbstractHorse`)
- `container` (`Container`)

### startRiding

```java
public boolean startRiding(Entity entity, boolean force)
```

**Parameters:**

- `entity` (`Entity`)
- `force` (`boolean`)

**Returns:** `boolean`

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `MinecraftServer`

### isFakePlayer

```java
public boolean isFakePlayer()
```

**Returns:** `boolean`

### FakePlayerNetHandler

```java
public FakePlayerNetHandler(MinecraftServer server, ServerPlayer player)
```

**Parameters:**

- `server` (`MinecraftServer`)
- `player` (`ServerPlayer`)

**Returns:** `public`

### tick

```java
public void tick()
```

### resetPosition

```java
public void resetPosition()
```

### disconnect

```java
public void disconnect(Component message)
```

**Parameters:**

- `message` (`Component`)

### handlePlayerInput

```java
public void handlePlayerInput(ServerboundPlayerInputPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPlayerInputPacket`)

### handleMoveVehicle

```java
public void handleMoveVehicle(ServerboundMoveVehiclePacket packet)
```

**Parameters:**

- `packet` (`ServerboundMoveVehiclePacket`)

### handleAcceptTeleportPacket

```java
public void handleAcceptTeleportPacket(ServerboundAcceptTeleportationPacket packet)
```

**Parameters:**

- `packet` (`ServerboundAcceptTeleportationPacket`)

### handleRecipeBookSeenRecipePacket

```java
public void handleRecipeBookSeenRecipePacket(ServerboundRecipeBookSeenRecipePacket packet)
```

**Parameters:**

- `packet` (`ServerboundRecipeBookSeenRecipePacket`)

### handleRecipeBookChangeSettingsPacket

```java
public void handleRecipeBookChangeSettingsPacket(ServerboundRecipeBookChangeSettingsPacket packet)
```

**Parameters:**

- `packet` (`ServerboundRecipeBookChangeSettingsPacket`)

### handleSeenAdvancements

```java
public void handleSeenAdvancements(ServerboundSeenAdvancementsPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSeenAdvancementsPacket`)

### handleCustomCommandSuggestions

```java
public void handleCustomCommandSuggestions(ServerboundCommandSuggestionPacket packet)
```

**Parameters:**

- `packet` (`ServerboundCommandSuggestionPacket`)

### handleSetCommandBlock

```java
public void handleSetCommandBlock(ServerboundSetCommandBlockPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetCommandBlockPacket`)

### handleSetCommandMinecart

```java
public void handleSetCommandMinecart(ServerboundSetCommandMinecartPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetCommandMinecartPacket`)

### handlePickItem

```java
public void handlePickItem(ServerboundPickItemPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPickItemPacket`)

### handleRenameItem

```java
public void handleRenameItem(ServerboundRenameItemPacket packet)
```

**Parameters:**

- `packet` (`ServerboundRenameItemPacket`)

### handleSetBeaconPacket

```java
public void handleSetBeaconPacket(ServerboundSetBeaconPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetBeaconPacket`)

### handleSetStructureBlock

```java
public void handleSetStructureBlock(ServerboundSetStructureBlockPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetStructureBlockPacket`)

### handleSetJigsawBlock

```java
public void handleSetJigsawBlock(ServerboundSetJigsawBlockPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetJigsawBlockPacket`)

### handleJigsawGenerate

```java
public void handleJigsawGenerate(ServerboundJigsawGeneratePacket packet)
```

**Parameters:**

- `packet` (`ServerboundJigsawGeneratePacket`)

### handleSelectTrade

```java
public void handleSelectTrade(ServerboundSelectTradePacket packet)
```

**Parameters:**

- `packet` (`ServerboundSelectTradePacket`)

### handleEditBook

```java
public void handleEditBook(ServerboundEditBookPacket packet)
```

**Parameters:**

- `packet` (`ServerboundEditBookPacket`)

### handleEntityTagQuery

```java
public void handleEntityTagQuery(ServerboundEntityTagQueryPacket packet)
```

**Parameters:**

- `packet` (`ServerboundEntityTagQueryPacket`)

### handleBlockEntityTagQuery

```java
public void handleBlockEntityTagQuery(ServerboundBlockEntityTagQueryPacket packet)
```

**Parameters:**

- `packet` (`ServerboundBlockEntityTagQueryPacket`)

### handleMovePlayer

```java
public void handleMovePlayer(ServerboundMovePlayerPacket packet)
```

**Parameters:**

- `packet` (`ServerboundMovePlayerPacket`)

### teleport

```java
public void teleport(double x, double y, double z, float yaw, float pitch)
```

**Parameters:**

- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `yaw` (`float`)
- `pitch` (`float`)

### handlePlayerAction

```java
public void handlePlayerAction(ServerboundPlayerActionPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPlayerActionPacket`)

### handleUseItemOn

```java
public void handleUseItemOn(ServerboundUseItemOnPacket packet)
```

**Parameters:**

- `packet` (`ServerboundUseItemOnPacket`)

### handleUseItem

```java
public void handleUseItem(ServerboundUseItemPacket packet)
```

**Parameters:**

- `packet` (`ServerboundUseItemPacket`)

### handleTeleportToEntityPacket

```java
public void handleTeleportToEntityPacket(ServerboundTeleportToEntityPacket packet)
```

**Parameters:**

- `packet` (`ServerboundTeleportToEntityPacket`)

### handleResourcePackResponse

```java
public void handleResourcePackResponse(ServerboundResourcePackPacket p_295695_)
```

**Parameters:**

- `p_295695_` (`ServerboundResourcePackPacket`)

### handlePaddleBoat

```java
public void handlePaddleBoat(ServerboundPaddleBoatPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPaddleBoatPacket`)

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails details)
```

**Parameters:**

- `details` (`DisconnectionDetails`)

### send

```java
public void send(Packet<?> packet)
```

**Parameters:**

- `packet` (`Packet<?>`)

### send

```java
public void send(Packet<?> packet, PacketSendListener sendListener)
```

**Parameters:**

- `packet` (`Packet<?>`)
- `sendListener` (`PacketSendListener`)

### handleSetCarriedItem

```java
public void handleSetCarriedItem(ServerboundSetCarriedItemPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetCarriedItemPacket`)

### handleChat

```java
public void handleChat(ServerboundChatPacket packet)
```

**Parameters:**

- `packet` (`ServerboundChatPacket`)

### handleAnimate

```java
public void handleAnimate(ServerboundSwingPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSwingPacket`)

### handlePlayerCommand

```java
public void handlePlayerCommand(ServerboundPlayerCommandPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPlayerCommandPacket`)

### handleInteract

```java
public void handleInteract(ServerboundInteractPacket packet)
```

**Parameters:**

- `packet` (`ServerboundInteractPacket`)

### handleClientCommand

```java
public void handleClientCommand(ServerboundClientCommandPacket packet)
```

**Parameters:**

- `packet` (`ServerboundClientCommandPacket`)

### handleContainerClose

```java
public void handleContainerClose(ServerboundContainerClosePacket packet)
```

**Parameters:**

- `packet` (`ServerboundContainerClosePacket`)

### handleContainerClick

```java
public void handleContainerClick(ServerboundContainerClickPacket packet)
```

**Parameters:**

- `packet` (`ServerboundContainerClickPacket`)

### handlePlaceRecipe

```java
public void handlePlaceRecipe(ServerboundPlaceRecipePacket packet)
```

**Parameters:**

- `packet` (`ServerboundPlaceRecipePacket`)

### handleContainerButtonClick

```java
public void handleContainerButtonClick(ServerboundContainerButtonClickPacket packet)
```

**Parameters:**

- `packet` (`ServerboundContainerButtonClickPacket`)

### handleSetCreativeModeSlot

```java
public void handleSetCreativeModeSlot(ServerboundSetCreativeModeSlotPacket packet)
```

**Parameters:**

- `packet` (`ServerboundSetCreativeModeSlotPacket`)

### handleSignUpdate

```java
public void handleSignUpdate(ServerboundSignUpdatePacket packet)
```

**Parameters:**

- `packet` (`ServerboundSignUpdatePacket`)

### handleKeepAlive

```java
public void handleKeepAlive(ServerboundKeepAlivePacket p_294627_)
```

**Parameters:**

- `p_294627_` (`ServerboundKeepAlivePacket`)

### handleCustomPayload

```java
public void handleCustomPayload(ServerboundCustomPayloadPacket p_294276_)
```

**Parameters:**

- `p_294276_` (`ServerboundCustomPayloadPacket`)

### handleClientInformation

```java
public void handleClientInformation(ServerboundClientInformationPacket p_301979_)
```

**Parameters:**

- `p_301979_` (`ServerboundClientInformationPacket`)

### handlePlayerAbilities

```java
public void handlePlayerAbilities(ServerboundPlayerAbilitiesPacket packet)
```

**Parameters:**

- `packet` (`ServerboundPlayerAbilitiesPacket`)

### handleChangeDifficulty

```java
public void handleChangeDifficulty(ServerboundChangeDifficultyPacket packet)
```

**Parameters:**

- `packet` (`ServerboundChangeDifficultyPacket`)

### handleLockDifficulty

```java
public void handleLockDifficulty(ServerboundLockDifficultyPacket packet)
```

**Parameters:**

- `packet` (`ServerboundLockDifficultyPacket`)

### teleport

```java
public void teleport(double x, double y, double z, float yaw, float pitch, Set<RelativeMovement> relativeSet)
```

**Parameters:**

- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `yaw` (`float`)
- `pitch` (`float`)
- `relativeSet` (`Set<RelativeMovement>`)

### ackBlockChangesUpTo

```java
public void ackBlockChangesUpTo(int sequence)
```

**Parameters:**

- `sequence` (`int`)

### handleChatCommand

```java
public void handleChatCommand(ServerboundChatCommandPacket packet)
```

**Parameters:**

- `packet` (`ServerboundChatCommandPacket`)

### handleChatAck

```java
public void handleChatAck(ServerboundChatAckPacket packet)
```

**Parameters:**

- `packet` (`ServerboundChatAckPacket`)

### addPendingMessage

```java
public void addPendingMessage(PlayerChatMessage message)
```

**Parameters:**

- `message` (`PlayerChatMessage`)

### sendPlayerChatMessage

```java
public void sendPlayerChatMessage(PlayerChatMessage message, ChatType.Bound boundChatType)
```

**Parameters:**

- `message` (`PlayerChatMessage`)
- `boundChatType` (`ChatType.Bound`)

### sendDisguisedChatMessage

```java
public void sendDisguisedChatMessage(Component content, ChatType.Bound boundChatType)
```

**Parameters:**

- `content` (`Component`)
- `boundChatType` (`ChatType.Bound`)

### handleChatSessionUpdate

```java
public void handleChatSessionUpdate(ServerboundChatSessionUpdatePacket packet)
```

**Parameters:**

- `packet` (`ServerboundChatSessionUpdatePacket`)

### FakeConnection

```java
public FakeConnection()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setListenerForServerboundHandshake

```java
public void setListenerForServerboundHandshake(PacketListener listener)
```

**Parameters:**

- `listener` (`PacketListener`)
