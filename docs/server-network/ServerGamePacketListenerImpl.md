# ServerGamePacketListenerImpl

**Package:** `net.minecraft.server.network`
**Type:** class
**Extends:** `ServerCommonPacketListenerImpl`
**Implements:** `ServerGamePacketListener`, `ServerPlayerConnection`, `TickablePacketListener`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `player` | `ServerPlayer` |  |
| `chunkSender` | `PlayerChunkSender` |  |

## Methods

### ServerGamePacketListenerImpl

```java
public ServerGamePacketListenerImpl(MinecraftServer p_9770_, Connection p_9771_, ServerPlayer p_9772_, CommonListenerCookie p_301978_)
```

**Parameters:**

- `p_9770_` (`MinecraftServer`)
- `p_9771_` (`Connection`)
- `p_9772_` (`ServerPlayer`)
- `p_301978_` (`CommonListenerCookie`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### getMaximumFlyingTicks

```java
private int getMaximumFlyingTicks(Entity p_326388_)
```

**Parameters:**

- `p_326388_` (`Entity`)

**Returns:** `private int`

### resetPosition

```java
public void resetPosition()
```

**Returns:** `public void`

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### shouldHandleMessage

```java
public boolean shouldHandleMessage(Packet<?> p_295183_)
```

**Parameters:**

- `p_295183_` (`Packet<?>`)

**Returns:** `boolean`

### playerProfile

```java
protected GameProfile playerProfile()
```

**Returns:** `GameProfile`

### filterTextPacket

```java
<T, R> private <T, R> CompletableFuture<R> filterTextPacket(T p_243240_, BiFunction<TextFilter, T, CompletableFuture<R>> p_243271_)
```

**Parameters:**

- `p_243240_` (`T`)
- `p_243271_` (`BiFunction<TextFilter, T, CompletableFuture<R>>`)

**Returns:** `private <T, R> CompletableFuture<R>`

### CancellationException

```java
throw new CancellationException()
```

**Returns:** `throw new`

### filterTextPacket

```java
private CompletableFuture<FilteredText> filterTextPacket(String p_243213_)
```

**Parameters:**

- `p_243213_` (`String`)

**Returns:** `private CompletableFuture<FilteredText>`

### filterTextPacket

```java
private CompletableFuture<List<FilteredText>> filterTextPacket(List<String> p_243258_)
```

**Parameters:**

- `p_243258_` (`List<String>`)

**Returns:** `private CompletableFuture<List<FilteredText>>`

### handlePlayerInput

```java
public void handlePlayerInput(ServerboundPlayerInputPacket p_9893_)
```

**Parameters:**

- `p_9893_` (`ServerboundPlayerInputPacket`)

### containsInvalidValues

```java
private static boolean containsInvalidValues(double p_143664_, double p_143665_, double p_143666_, float p_143667_, float p_143668_)
```

**Parameters:**

- `p_143664_` (`double`)
- `p_143665_` (`double`)
- `p_143666_` (`double`)
- `p_143667_` (`float`)
- `p_143668_` (`float`)

**Returns:** `private static boolean`

### clampHorizontal

```java
private static double clampHorizontal(double p_143610_)
```

**Parameters:**

- `p_143610_` (`double`)

**Returns:** `private static double`

### clampVertical

```java
private static double clampVertical(double p_143654_)
```

**Parameters:**

- `p_143654_` (`double`)

**Returns:** `private static double`

### handleMoveVehicle

```java
public void handleMoveVehicle(ServerboundMoveVehiclePacket p_9876_)
```

**Parameters:**

- `p_9876_` (`ServerboundMoveVehiclePacket`)

### resyncPlayerWithVehicle

```java
 resyncPlayerWithVehicle()
```

**Returns:** ``

### resyncPlayerWithVehicle

```java
 resyncPlayerWithVehicle()
```

**Returns:** ``

### resyncPlayerWithVehicle

```java
private void resyncPlayerWithVehicle(Entity vehicle)
```

**Parameters:**

- `vehicle` (`Entity`)

**Returns:** `private void`

### noBlocksAround

```java
private boolean noBlocksAround(Entity p_9794_)
```

**Parameters:**

- `p_9794_` (`Entity`)

**Returns:** `private boolean`

### handleAcceptTeleportPacket

```java
public void handleAcceptTeleportPacket(ServerboundAcceptTeleportationPacket p_9835_)
```

**Parameters:**

- `p_9835_` (`ServerboundAcceptTeleportationPacket`)

### handleRecipeBookSeenRecipePacket

```java
public void handleRecipeBookSeenRecipePacket(ServerboundRecipeBookSeenRecipePacket p_9897_)
```

**Parameters:**

- `p_9897_` (`ServerboundRecipeBookSeenRecipePacket`)

### handleRecipeBookChangeSettingsPacket

```java
public void handleRecipeBookChangeSettingsPacket(ServerboundRecipeBookChangeSettingsPacket p_9895_)
```

**Parameters:**

- `p_9895_` (`ServerboundRecipeBookChangeSettingsPacket`)

### handleSeenAdvancements

```java
public void handleSeenAdvancements(ServerboundSeenAdvancementsPacket p_9903_)
```

**Parameters:**

- `p_9903_` (`ServerboundSeenAdvancementsPacket`)

### handleCustomCommandSuggestions

```java
public void handleCustomCommandSuggestions(ServerboundCommandSuggestionPacket p_9847_)
```

**Parameters:**

- `p_9847_` (`ServerboundCommandSuggestionPacket`)

### handleSetCommandBlock

```java
public void handleSetCommandBlock(ServerboundSetCommandBlockPacket p_9911_)
```

**Parameters:**

- `p_9911_` (`ServerboundSetCommandBlockPacket`)

### handleSetCommandMinecart

```java
public void handleSetCommandMinecart(ServerboundSetCommandMinecartPacket p_9913_)
```

**Parameters:**

- `p_9913_` (`ServerboundSetCommandMinecartPacket`)

### handlePickItem

```java
public void handlePickItem(ServerboundPickItemPacket p_9880_)
```

**Parameters:**

- `p_9880_` (`ServerboundPickItemPacket`)

### handleRenameItem

```java
public void handleRenameItem(ServerboundRenameItemPacket p_9899_)
```

**Parameters:**

- `p_9899_` (`ServerboundRenameItemPacket`)

### handleSetBeaconPacket

```java
public void handleSetBeaconPacket(ServerboundSetBeaconPacket p_9907_)
```

**Parameters:**

- `p_9907_` (`ServerboundSetBeaconPacket`)

### handleSetStructureBlock

```java
public void handleSetStructureBlock(ServerboundSetStructureBlockPacket p_9919_)
```

**Parameters:**

- `p_9919_` (`ServerboundSetStructureBlockPacket`)

### handleSetJigsawBlock

```java
public void handleSetJigsawBlock(ServerboundSetJigsawBlockPacket p_9917_)
```

**Parameters:**

- `p_9917_` (`ServerboundSetJigsawBlockPacket`)

### handleJigsawGenerate

```java
public void handleJigsawGenerate(ServerboundJigsawGeneratePacket p_9868_)
```

**Parameters:**

- `p_9868_` (`ServerboundJigsawGeneratePacket`)

### handleSelectTrade

```java
public void handleSelectTrade(ServerboundSelectTradePacket p_9905_)
```

**Parameters:**

- `p_9905_` (`ServerboundSelectTradePacket`)

### handleEditBook

```java
public void handleEditBook(ServerboundEditBookPacket p_9862_)
```

**Parameters:**

- `p_9862_` (`ServerboundEditBookPacket`)

### updateBookContents

```java
private void updateBookContents(List<FilteredText> p_9813_, int p_9814_)
```

**Parameters:**

- `p_9813_` (`List<FilteredText>`)
- `p_9814_` (`int`)

**Returns:** `private void`

### signBook

```java
private void signBook(FilteredText p_215209_, List<FilteredText> p_215210_, int p_215211_)
```

**Parameters:**

- `p_215209_` (`FilteredText`)
- `p_215210_` (`List<FilteredText>`)
- `p_215211_` (`int`)

**Returns:** `private void`

### filterableFromOutgoing

```java
private Filterable<String> filterableFromOutgoing(FilteredText p_332041_)
```

**Parameters:**

- `p_332041_` (`FilteredText`)

**Returns:** `private Filterable<String>`

### handleEntityTagQuery

```java
public void handleEntityTagQuery(ServerboundEntityTagQueryPacket p_320066_)
```

**Parameters:**

- `p_320066_` (`ServerboundEntityTagQueryPacket`)

### handleContainerSlotStateChanged

```java
public void handleContainerSlotStateChanged(ServerboundContainerSlotStateChangedPacket p_307480_)
```

**Parameters:**

- `p_307480_` (`ServerboundContainerSlotStateChangedPacket`)

### handleBlockEntityTagQuery

```java
public void handleBlockEntityTagQuery(ServerboundBlockEntityTagQueryPacket p_320124_)
```

**Parameters:**

- `p_320124_` (`ServerboundBlockEntityTagQueryPacket`)

### handleMovePlayer

```java
public void handleMovePlayer(ServerboundMovePlayerPacket p_9874_)
```

**Parameters:**

- `p_9874_` (`ServerboundMovePlayerPacket`)

### updateAwaitingTeleport

```java
private boolean updateAwaitingTeleport()
```

**Returns:** `private boolean`

### isPlayerCollidingWithAnythingNew

```java
private boolean isPlayerCollidingWithAnythingNew(LevelReader p_289008_, AABB p_288986_, double p_288990_, double p_288991_, double p_288967_)
```

**Parameters:**

- `p_289008_` (`LevelReader`)
- `p_288986_` (`AABB`)
- `p_288990_` (`double`)
- `p_288991_` (`double`)
- `p_288967_` (`double`)

**Returns:** `private boolean`

### teleport

```java
public void teleport(double p_9775_, double p_9776_, double p_9777_, float p_9778_, float p_9779_)
```

**Parameters:**

- `p_9775_` (`double`)
- `p_9776_` (`double`)
- `p_9777_` (`double`)
- `p_9778_` (`float`)
- `p_9779_` (`float`)

**Returns:** `public void`

### teleport

```java
public void teleport(double p_9781_, double p_9782_, double p_9783_, float p_9784_, float p_9785_, Set<RelativeMovement> p_9786_)
```

**Parameters:**

- `p_9781_` (`double`)
- `p_9782_` (`double`)
- `p_9783_` (`double`)
- `p_9784_` (`float`)
- `p_9785_` (`float`)
- `p_9786_` (`Set<RelativeMovement>`)

**Returns:** `public void`

### handlePlayerAction

```java
public void handlePlayerAction(ServerboundPlayerActionPacket p_9889_)
```

**Parameters:**

- `p_9889_` (`ServerboundPlayerActionPacket`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid player action")
```

**Parameters:**

- `action"` (`"Invalid player`)

**Returns:** `throw new`

### wasBlockPlacementAttempt

```java
private static boolean wasBlockPlacementAttempt(ServerPlayer p_9791_, ItemStack p_9792_)
```

**Parameters:**

- `p_9791_` (`ServerPlayer`)
- `p_9792_` (`ItemStack`)

**Returns:** `private static boolean`

### handleUseItemOn

```java
public void handleUseItemOn(ServerboundUseItemOnPacket p_9930_)
```

**Parameters:**

- `p_9930_` (`ServerboundUseItemOnPacket`)

### handleUseItem

```java
public void handleUseItem(ServerboundUseItemPacket p_9932_)
```

**Parameters:**

- `p_9932_` (`ServerboundUseItemPacket`)

### handleTeleportToEntityPacket

```java
public void handleTeleportToEntityPacket(ServerboundTeleportToEntityPacket p_9928_)
```

**Parameters:**

- `p_9928_` (`ServerboundTeleportToEntityPacket`)

### handlePaddleBoat

```java
public void handlePaddleBoat(ServerboundPaddleBoatPacket p_9878_)
```

**Parameters:**

- `p_9878_` (`ServerboundPaddleBoatPacket`)

### onDisconnect

```java
public void onDisconnect(DisconnectionDetails p_350554_)
```

**Parameters:**

- `p_350554_` (`DisconnectionDetails`)

### removePlayerFromWorld

```java
private void removePlayerFromWorld()
```

**Returns:** `private void`

### ackBlockChangesUpTo

```java
public void ackBlockChangesUpTo(int p_215202_)
```

**Parameters:**

- `p_215202_` (`int`)

**Returns:** `public void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Expected packet sequence nr >= 0")
```

**Parameters:**

- `0"` (`"Expected packet sequence nr >=`)

**Returns:** `throw new`

### handleSetCarriedItem

```java
public void handleSetCarriedItem(ServerboundSetCarriedItemPacket p_9909_)
```

**Parameters:**

- `p_9909_` (`ServerboundSetCarriedItemPacket`)

### handleChat

```java
public void handleChat(ServerboundChatPacket p_9841_)
```

**Parameters:**

- `p_9841_` (`ServerboundChatPacket`)

### handleChatCommand

```java
public void handleChatCommand(ServerboundChatCommandPacket p_215225_)
```

**Parameters:**

- `p_215225_` (`ServerboundChatCommandPacket`)

### performUnsignedChatCommand

```java
private void performUnsignedChatCommand(String p_338482_)
```

**Parameters:**

- `p_338482_` (`String`)

**Returns:** `private void`

### handleSignedChatCommand

```java
public void handleSignedChatCommand(ServerboundChatCommandSignedPacket p_338604_)
```

**Parameters:**

- `p_338604_` (`ServerboundChatCommandSignedPacket`)

### performSignedChatCommand

```java
private void performSignedChatCommand(ServerboundChatCommandSignedPacket p_338593_, LastSeenMessages p_250484_)
```

**Parameters:**

- `p_338593_` (`ServerboundChatCommandSignedPacket`)
- `p_250484_` (`LastSeenMessages`)

**Returns:** `private void`

### handleMessageDecodeFailure

```java
private void handleMessageDecodeFailure(SignedMessageChain.DecodeException p_252068_)
```

**Parameters:**

- `p_252068_` (`SignedMessageChain.DecodeException`)

**Returns:** `private void`

### collectSignedArguments

```java
<S> private <S> Map<String, PlayerChatMessage> collectSignedArguments(ServerboundChatCommandSignedPacket p_338222_, SignableCommand<S> p_250039_, LastSeenMessages p_249207_)
```

**Parameters:**

- `p_338222_` (`ServerboundChatCommandSignedPacket`)
- `p_250039_` (`SignableCommand<S>`)
- `p_249207_` (`LastSeenMessages`)

**Returns:** `private <S> Map<String, PlayerChatMessage>`

### collectUnsignedArguments

```java
<S> private <S> Map<String, PlayerChatMessage> collectUnsignedArguments(List<SignableCommand.Argument<S>> p_338744_)
```

**Parameters:**

- `p_338744_` (`List<SignableCommand.Argument<S>>`)

**Returns:** `private <S> Map<String, PlayerChatMessage>`

### createSignedArgumentMismatchException

```java
<S> private static <S> SignedMessageChain.DecodeException createSignedArgumentMismatchException(String p_338499_, List<ArgumentSignatures.Entry> p_338388_, List<SignableCommand.Argument<S>> p_338708_)
```

**Parameters:**

- `p_338499_` (`String`)
- `p_338388_` (`List<ArgumentSignatures.Entry>`)
- `p_338708_` (`List<SignableCommand.Argument<S>>`)

**Returns:** `private static <S> SignedMessageChain.DecodeException`

### parseCommand

```java
private ParseResults<CommandSourceStack> parseCommand(String p_242938_)
```

**Parameters:**

- `p_242938_` (`String`)

**Returns:** `private ParseResults<CommandSourceStack>`

### tryHandleChat

```java
private void tryHandleChat(String p_338775_, Runnable p_338235_)
```

**Parameters:**

- `p_338775_` (`String`)
- `p_338235_` (`Runnable`)

**Returns:** `private void`

### unpackAndApplyLastSeen

```java
private Optional<LastSeenMessages> unpackAndApplyLastSeen(LastSeenMessages.Update p_249673_)
```

**Parameters:**

- `p_249673_` (`LastSeenMessages.Update`)

**Returns:** `private Optional<LastSeenMessages>`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### isChatMessageIllegal

```java
private static boolean isChatMessageIllegal(String p_215215_)
```

**Parameters:**

- `p_215215_` (`String`)

**Returns:** `private static boolean`

### getSignedMessage

```java
private PlayerChatMessage getSignedMessage(ServerboundChatPacket p_251061_, LastSeenMessages p_250566_)
```

**Parameters:**

- `p_251061_` (`ServerboundChatPacket`)
- `p_250566_` (`LastSeenMessages`)

**Returns:** `private PlayerChatMessage`

### broadcastChatMessage

```java
private void broadcastChatMessage(PlayerChatMessage p_243277_)
```

**Parameters:**

- `p_243277_` (`PlayerChatMessage`)

**Returns:** `private void`

### detectRateSpam

```java
private void detectRateSpam()
```

**Returns:** `private void`

### handleChatAck

```java
public void handleChatAck(ServerboundChatAckPacket p_242387_)
```

**Parameters:**

- `p_242387_` (`ServerboundChatAckPacket`)

### synchronized

```java
 synchronized()
```

**Returns:** ``

### handleAnimate

```java
public void handleAnimate(ServerboundSwingPacket p_9926_)
```

**Parameters:**

- `p_9926_` (`ServerboundSwingPacket`)

### handlePlayerCommand

```java
public void handlePlayerCommand(ServerboundPlayerCommandPacket p_9891_)
```

**Parameters:**

- `p_9891_` (`ServerboundPlayerCommandPacket`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid client command!")
```

**Parameters:**

- `command!"` (`"Invalid client`)

**Returns:** `throw new`

### addPendingMessage

```java
public void addPendingMessage(PlayerChatMessage p_242439_)
```

**Parameters:**

- `p_242439_` (`PlayerChatMessage`)

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### sendPlayerChatMessage

```java
public void sendPlayerChatMessage(PlayerChatMessage p_250321_, ChatType.Bound p_250910_)
```

**Parameters:**

- `p_250321_` (`PlayerChatMessage`)
- `p_250910_` (`ChatType.Bound`)

**Returns:** `public void`

### sendDisguisedChatMessage

```java
public void sendDisguisedChatMessage(Component p_251804_, ChatType.Bound p_250040_)
```

**Parameters:**

- `p_251804_` (`Component`)
- `p_250040_` (`ChatType.Bound`)

**Returns:** `public void`

### getRemoteAddress

```java
public SocketAddress getRemoteAddress()
```

**Returns:** `public SocketAddress`

### switchToConfig

```java
public void switchToConfig()
```

**Returns:** `public void`

### handlePingRequest

```java
public void handlePingRequest(ServerboundPingRequestPacket p_320356_)
```

**Parameters:**

- `p_320356_` (`ServerboundPingRequestPacket`)

### handleInteract

```java
public void handleInteract(ServerboundInteractPacket p_9866_)
```

**Parameters:**

- `p_9866_` (`ServerboundInteractPacket`)

### performInteraction

```java
private void performInteraction(InteractionHand p_143679_, ServerGamePacketListenerImpl.EntityInteraction p_143680_)
```

**Parameters:**

- `p_143679_` (`InteractionHand`)
- `p_143680_` (`ServerGamePacketListenerImpl.EntityInteraction`)

**Returns:** `private void`

### onInteraction

```java
public void onInteraction(InteractionHand p_143677_)
```

**Parameters:**

- `p_143677_` (`InteractionHand`)

### onInteraction

```java
public void onInteraction(InteractionHand p_143682_, Vec3 p_143683_)
```

**Parameters:**

- `p_143682_` (`InteractionHand`)
- `p_143683_` (`Vec3`)

### onAttack

```java
public void onAttack()
```

### handleClientCommand

```java
public void handleClientCommand(ServerboundClientCommandPacket p_9843_)
```

**Parameters:**

- `p_9843_` (`ServerboundClientCommandPacket`)

### handleContainerClose

```java
public void handleContainerClose(ServerboundContainerClosePacket p_9858_)
```

**Parameters:**

- `p_9858_` (`ServerboundContainerClosePacket`)

### handleContainerClick

```java
public void handleContainerClick(ServerboundContainerClickPacket p_9856_)
```

**Parameters:**

- `p_9856_` (`ServerboundContainerClickPacket`)

### handlePlaceRecipe

```java
public void handlePlaceRecipe(ServerboundPlaceRecipePacket p_9882_)
```

**Parameters:**

- `p_9882_` (`ServerboundPlaceRecipePacket`)

### handleContainerButtonClick

```java
public void handleContainerButtonClick(ServerboundContainerButtonClickPacket p_9854_)
```

**Parameters:**

- `p_9854_` (`ServerboundContainerButtonClickPacket`)

### handleSetCreativeModeSlot

```java
public void handleSetCreativeModeSlot(ServerboundSetCreativeModeSlotPacket p_9915_)
```

**Parameters:**

- `p_9915_` (`ServerboundSetCreativeModeSlotPacket`)

### handleSignUpdate

```java
public void handleSignUpdate(ServerboundSignUpdatePacket p_9921_)
```

**Parameters:**

- `p_9921_` (`ServerboundSignUpdatePacket`)

### updateSignText

```java
private void updateSignText(ServerboundSignUpdatePacket p_9923_, List<FilteredText> p_9924_)
```

**Parameters:**

- `p_9923_` (`ServerboundSignUpdatePacket`)
- `p_9924_` (`List<FilteredText>`)

**Returns:** `private void`

### handlePlayerAbilities

```java
public void handlePlayerAbilities(ServerboundPlayerAbilitiesPacket p_9887_)
```

**Parameters:**

- `p_9887_` (`ServerboundPlayerAbilitiesPacket`)

### handleClientInformation

```java
public void handleClientInformation(ServerboundClientInformationPacket p_301979_)
```

**Parameters:**

- `p_301979_` (`ServerboundClientInformationPacket`)

### handleChangeDifficulty

```java
public void handleChangeDifficulty(ServerboundChangeDifficultyPacket p_9839_)
```

**Parameters:**

- `p_9839_` (`ServerboundChangeDifficultyPacket`)

### handleLockDifficulty

```java
public void handleLockDifficulty(ServerboundLockDifficultyPacket p_9872_)
```

**Parameters:**

- `p_9872_` (`ServerboundLockDifficultyPacket`)

### handleChatSessionUpdate

```java
public void handleChatSessionUpdate(ServerboundChatSessionUpdatePacket p_253950_)
```

**Parameters:**

- `p_253950_` (`ServerboundChatSessionUpdatePacket`)

### handleConfigurationAcknowledged

```java
public void handleConfigurationAcknowledged(ServerboundConfigurationAcknowledgedPacket p_294416_)
```

**Parameters:**

- `p_294416_` (`ServerboundConfigurationAcknowledgedPacket`)

### IllegalStateException

```java
throw new IllegalStateException("Client acknowledged config, but none was requested")
```

**Parameters:**

- `config` (`"Client acknowledged`)
- `requested"` (`but none was`)

**Returns:** `throw new`

### handleChunkBatchReceived

```java
public void handleChunkBatchReceived(ServerboundChunkBatchReceivedPacket p_295247_)
```

**Parameters:**

- `p_295247_` (`ServerboundChunkBatchReceivedPacket`)

### handleDebugSampleSubscription

```java
public void handleDebugSampleSubscription(ServerboundDebugSampleSubscriptionPacket p_324293_)
```

**Parameters:**

- `p_324293_` (`ServerboundDebugSampleSubscriptionPacket`)

### resetPlayerChatState

```java
private void resetPlayerChatState(RemoteChatSession p_253823_)
```

**Parameters:**

- `p_253823_` (`RemoteChatSession`)

**Returns:** `private void`

### handleCustomPayload

```java
public void handleCustomPayload(ServerboundCustomPayloadPacket p_333887_)
```

**Parameters:**

- `p_333887_` (`ServerboundCustomPayloadPacket`)

### getPlayer

```java
public ServerPlayer getPlayer()
```

**Returns:** `ServerPlayer`

### run

```java
InteractionResult run(ServerPlayer p_143695_, Entity p_143696_, InteractionHand p_143697_)
```

**Parameters:**

- `p_143695_` (`ServerPlayer`)
- `p_143696_` (`Entity`)
- `p_143697_` (`InteractionHand`)

**Returns:** `InteractionResult`
