# CommandSourceStack

**Package:** `net.minecraft.commands`
**Type:** class
**Implements:** `ExecutionCommandSource<CommandSourceStack>`, `SharedSuggestionProvider`, `net.neoforged.neoforge.common.extensions.ICommandSourceStackExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_PLAYER` | `SimpleCommandExceptionType` |  |
| `ERROR_NOT_ENTITY` | `SimpleCommandExceptionType` |  |
| `source` | `CommandSource` |  |

## Methods

### CommandSourceStack

```java
public CommandSourceStack(CommandSource p_81302_, Vec3 p_81303_, Vec2 p_81304_, ServerLevel p_81305_, int p_81306_, String p_81307_, Component p_81308_, MinecraftServer p_81309_, Entity p_81310_)
```

**Parameters:**

- `p_81302_` (`CommandSource`)
- `p_81303_` (`Vec3`)
- `p_81304_` (`Vec2`)
- `p_81305_` (`ServerLevel`)
- `p_81306_` (`int`)
- `p_81307_` (`String`)
- `p_81308_` (`Component`)
- `p_81309_` (`MinecraftServer`)
- `p_81310_` (`Entity`)

**Returns:** `public`

### CommandSourceStack

```java
protected CommandSourceStack(CommandSource p_282943_, Vec3 p_282023_, Vec2 p_282896_, ServerLevel p_282659_, int p_283075_, String p_282379_, Component p_282469_, MinecraftServer p_281590_, Entity p_281515_, boolean p_282415_, CommandResultCallback p_309630_, EntityAnchorArgument.Anchor p_282332_, CommandSigningContext p_283585_, TaskChainer p_282376_)
```

**Parameters:**

- `p_282943_` (`CommandSource`)
- `p_282023_` (`Vec3`)
- `p_282896_` (`Vec2`)
- `p_282659_` (`ServerLevel`)
- `p_283075_` (`int`)
- `p_282379_` (`String`)
- `p_282469_` (`Component`)
- `p_281590_` (`MinecraftServer`)
- `p_281515_` (`Entity`)
- `p_282415_` (`boolean`)
- `p_309630_` (`CommandResultCallback`)
- `p_282332_` (`EntityAnchorArgument.Anchor`)
- `p_283585_` (`CommandSigningContext`)
- `p_282376_` (`TaskChainer`)

**Returns:** `protected`

### withSource

```java
public CommandSourceStack withSource(CommandSource p_165485_)
```

**Parameters:**

- `p_165485_` (`CommandSource`)

**Returns:** `public CommandSourceStack`

### withEntity

```java
public CommandSourceStack withEntity(Entity p_81330_)
```

**Parameters:**

- `p_81330_` (`Entity`)

**Returns:** `public CommandSourceStack`

### withPosition

```java
public CommandSourceStack withPosition(Vec3 p_81349_)
```

**Parameters:**

- `p_81349_` (`Vec3`)

**Returns:** `public CommandSourceStack`

### withRotation

```java
public CommandSourceStack withRotation(Vec2 p_81347_)
```

**Parameters:**

- `p_81347_` (`Vec2`)

**Returns:** `public CommandSourceStack`

### withCallback

```java
public CommandSourceStack withCallback(CommandResultCallback p_309591_)
```

**Parameters:**

- `p_309591_` (`CommandResultCallback`)

**Returns:** `public CommandSourceStack`

### withCallback

```java
public CommandSourceStack withCallback(CommandResultCallback p_309575_, BinaryOperator<CommandResultCallback> p_305804_)
```

**Parameters:**

- `p_309575_` (`CommandResultCallback`)
- `p_305804_` (`BinaryOperator<CommandResultCallback>`)

**Returns:** `public CommandSourceStack`

### withSuppressedOutput

```java
public CommandSourceStack withSuppressedOutput()
```

**Returns:** `public CommandSourceStack`

### withPermission

```java
public CommandSourceStack withPermission(int p_81326_)
```

**Parameters:**

- `p_81326_` (`int`)

**Returns:** `public CommandSourceStack`

### withMaximumPermission

```java
public CommandSourceStack withMaximumPermission(int p_81359_)
```

**Parameters:**

- `p_81359_` (`int`)

**Returns:** `public CommandSourceStack`

### withAnchor

```java
public CommandSourceStack withAnchor(EntityAnchorArgument.Anchor p_81351_)
```

**Parameters:**

- `p_81351_` (`EntityAnchorArgument.Anchor`)

**Returns:** `public CommandSourceStack`

### withLevel

```java
public CommandSourceStack withLevel(ServerLevel p_81328_)
```

**Parameters:**

- `p_81328_` (`ServerLevel`)

**Returns:** `public CommandSourceStack`

### CommandSourceStack

```java
return new CommandSourceStack()
```

**Returns:** `return new`

### facing

```java
public CommandSourceStack facing(Entity p_81332_, EntityAnchorArgument.Anchor p_81333_)
```

**Parameters:**

- `p_81332_` (`Entity`)
- `p_81333_` (`EntityAnchorArgument.Anchor`)

**Returns:** `public CommandSourceStack`

### facing

```java
public CommandSourceStack facing(Vec3 p_81365_)
```

**Parameters:**

- `p_81365_` (`Vec3`)

**Returns:** `public CommandSourceStack`

### withSigningContext

```java
public CommandSourceStack withSigningContext(CommandSigningContext p_230894_, TaskChainer p_302022_)
```

**Parameters:**

- `p_230894_` (`CommandSigningContext`)
- `p_302022_` (`TaskChainer`)

**Returns:** `public CommandSourceStack`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getTextName

```java
public String getTextName()
```

**Returns:** `public String`

### hasPermission

```java
public boolean hasPermission(int p_81370_)
```

**Parameters:**

- `p_81370_` (`int`)

**Returns:** `boolean`

### getPosition

```java
public Vec3 getPosition()
```

**Returns:** `public Vec3`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### getEntity

```java
public Entity getEntity()
```

**Returns:** `Entity`

### getEntityOrException

```java
public Entity getEntityOrException()
```

**Returns:** `public Entity`

### getPlayerOrException

```java
public ServerPlayer getPlayerOrException()
```

**Returns:** `public ServerPlayer`

### getPlayer

```java
public ServerPlayer getPlayer()
```

**Returns:** `ServerPlayer`

### isPlayer

```java
public boolean isPlayer()
```

**Returns:** `public boolean`

### getRotation

```java
public Vec2 getRotation()
```

**Returns:** `public Vec2`

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `public MinecraftServer`

### getAnchor

```java
public EntityAnchorArgument.Anchor getAnchor()
```

**Returns:** `public EntityAnchorArgument.Anchor`

### getSigningContext

```java
public CommandSigningContext getSigningContext()
```

**Returns:** `public CommandSigningContext`

### getChatMessageChainer

```java
public TaskChainer getChatMessageChainer()
```

**Returns:** `public TaskChainer`

### shouldFilterMessageTo

```java
public boolean shouldFilterMessageTo(ServerPlayer p_243268_)
```

**Parameters:**

- `p_243268_` (`ServerPlayer`)

**Returns:** `public boolean`

### sendChatMessage

```java
public void sendChatMessage(OutgoingChatMessage p_251464_, boolean p_252146_, ChatType.Bound p_250406_)
```

**Parameters:**

- `p_251464_` (`OutgoingChatMessage`)
- `p_252146_` (`boolean`)
- `p_250406_` (`ChatType.Bound`)

**Returns:** `public void`

### sendSystemMessage

```java
public void sendSystemMessage(Component p_243331_)
```

**Parameters:**

- `p_243331_` (`Component`)

**Returns:** `public void`

### sendSuccess

```java
public void sendSuccess(Supplier<Component> p_288979_, boolean p_289007_)
```

**Parameters:**

- `p_288979_` (`Supplier<Component>`)
- `p_289007_` (`boolean`)

**Returns:** `public void`

### broadcastToAdmins

```java
private void broadcastToAdmins(Component p_81367_)
```

**Parameters:**

- `p_81367_` (`Component`)

**Returns:** `private void`

### sendFailure

```java
public void sendFailure(Component p_81353_)
```

**Parameters:**

- `p_81353_` (`Component`)

**Returns:** `public void`

### callback

```java
public CommandResultCallback callback()
```

**Returns:** `CommandResultCallback`

### getOnlinePlayerNames

```java
public Collection<String> getOnlinePlayerNames()
```

**Returns:** `Collection<String>`

### getAllTeams

```java
public Collection<String> getAllTeams()
```

**Returns:** `Collection<String>`

### getAvailableSounds

```java
public Stream<ResourceLocation> getAvailableSounds()
```

**Returns:** `Stream<ResourceLocation>`

### getRecipeNames

```java
public Stream<ResourceLocation> getRecipeNames()
```

**Returns:** `Stream<ResourceLocation>`

### customSuggestion

```java
public CompletableFuture<Suggestions> customSuggestion(CommandContext<?> p_212324_)
```

**Parameters:**

- `p_212324_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### suggestRegistryElements

```java
public CompletableFuture<Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212330_, SharedSuggestionProvider.ElementSuggestionType p_212331_, SuggestionsBuilder p_212332_, CommandContext<?> p_212333_)
```

**Parameters:**

- `p_212330_` (`ResourceKey<? extends Registry<?>>`)
- `p_212331_` (`SharedSuggestionProvider.ElementSuggestionType`)
- `p_212332_` (`SuggestionsBuilder`)
- `p_212333_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### levels

```java
public Set<ResourceKey<Level>> levels()
```

**Returns:** `Set<ResourceKey<Level>>`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### enabledFeatures

```java
public FeatureFlagSet enabledFeatures()
```

**Returns:** `FeatureFlagSet`

### dispatcher

```java
public CommandDispatcher<CommandSourceStack> dispatcher()
```

**Returns:** `CommandDispatcher<CommandSourceStack>`

### handleError

```java
public void handleError(CommandExceptionType p_307548_, Message p_307613_, boolean p_307560_, TraceCallbacks p_307654_)
```

**Parameters:**

- `p_307548_` (`CommandExceptionType`)
- `p_307613_` (`Message`)
- `p_307560_` (`boolean`)
- `p_307654_` (`TraceCallbacks`)

### isSilent

```java
public boolean isSilent()
```

**Returns:** `boolean`
