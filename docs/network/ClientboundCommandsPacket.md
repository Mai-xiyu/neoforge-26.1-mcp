# ClientboundCommandsPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundCommandsPacket>` |  |

## Methods

### ClientboundCommandsPacket

```java
public ClientboundCommandsPacket(RootCommandNode<SharedSuggestionProvider> p_131861_)
```

**Parameters:**

- `p_131861_` (`RootCommandNode<SharedSuggestionProvider>`)

**Returns:** `public`

### ClientboundCommandsPacket

```java
private ClientboundCommandsPacket(FriendlyByteBuf p_178805_)
```

**Parameters:**

- `p_178805_` (`FriendlyByteBuf`)

**Returns:** `private`

### validateEntries

```java
 validateEntries()
```

**Returns:** ``

### write

```java
private void write(FriendlyByteBuf p_131886_)
```

**Parameters:**

- `p_131886_` (`FriendlyByteBuf`)

**Returns:** `private void`

### validateEntries

```java
private static void validateEntries(List<ClientboundCommandsPacket.Entry> p_237631_, BiPredicate<ClientboundCommandsPacket.Entry, IntSet> p_237632_)
```

**Parameters:**

- `p_237631_` (`List<ClientboundCommandsPacket.Entry>`)
- `p_237632_` (`BiPredicate<ClientboundCommandsPacket.Entry, IntSet>`)

**Returns:** `private static void`

### IllegalStateException

```java
throw new IllegalStateException("Server sent an impossible command tree")
```

**Parameters:**

- `tree"` (`"Server sent an impossible command`)

**Returns:** `throw new`

### validateEntries

```java
private static void validateEntries(List<ClientboundCommandsPacket.Entry> p_237629_)
```

**Parameters:**

- `p_237629_` (`List<ClientboundCommandsPacket.Entry>`)

**Returns:** `private static void`

### validateEntries

```java
 validateEntries()
```

**Returns:** ``

### validateEntries

```java
 validateEntries()
```

**Returns:** ``

### enumerateNodes

```java
private static Object2IntMap<CommandNode<SharedSuggestionProvider>> enumerateNodes(RootCommandNode<SharedSuggestionProvider> p_131863_)
```

**Parameters:**

- `p_131863_` (`RootCommandNode<SharedSuggestionProvider>`)

**Returns:** `private static Object2IntMap<CommandNode<SharedSuggestionProvider>>`

### createEntries

```java
private static List<ClientboundCommandsPacket.Entry> createEntries(Object2IntMap<CommandNode<SharedSuggestionProvider>> p_237627_)
```

**Parameters:**

- `p_237627_` (`Object2IntMap<CommandNode<SharedSuggestionProvider>>`)

**Returns:** `private static List<ClientboundCommandsPacket.Entry>`

### readNode

```java
private static ClientboundCommandsPacket.Entry readNode(FriendlyByteBuf p_131888_)
```

**Parameters:**

- `p_131888_` (`FriendlyByteBuf`)

**Returns:** `private static ClientboundCommandsPacket.Entry`

### createEntry

```java
private static ClientboundCommandsPacket.Entry createEntry(CommandNode<SharedSuggestionProvider> p_237622_, Object2IntMap<CommandNode<SharedSuggestionProvider>> p_237623_)
```

**Parameters:**

- `p_237622_` (`CommandNode<SharedSuggestionProvider>`)
- `p_237623_` (`Object2IntMap<CommandNode<SharedSuggestionProvider>>`)

**Returns:** `private static ClientboundCommandsPacket.Entry`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Unknown node type " + p_237622_)
```

**Parameters:**

- `p_237622_` (`"Unknown node type " +`)

**Returns:** `throw new`

### type

```java
public PacketType<ClientboundCommandsPacket> type()
```

**Returns:** `PacketType<ClientboundCommandsPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131878_)
```

**Parameters:**

- `p_131878_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getRoot

```java
public RootCommandNode<SharedSuggestionProvider> getRoot(CommandBuildContext p_237625_)
```

**Parameters:**

- `p_237625_` (`CommandBuildContext`)

**Returns:** `public RootCommandNode<SharedSuggestionProvider>`

### ArgumentNodeStub

```java
 ArgumentNodeStub(String p_237650_, ArgumentTypeInfo.Template<?> p_237651_, ResourceLocation p_237652_)
```

**Parameters:**

- `p_237650_` (`String`)
- `p_237651_` (`ArgumentTypeInfo.Template<?>`)
- `p_237652_` (`ResourceLocation`)

**Returns:** ``

### ArgumentNodeStub

```java
public ArgumentNodeStub(ArgumentCommandNode<SharedSuggestionProvider, ?> p_237648_)
```

**Parameters:**

- `p_237648_` (`ArgumentCommandNode<SharedSuggestionProvider, ?>`)

**Returns:** `public`

### build

```java
public ArgumentBuilder<SharedSuggestionProvider, ?> build(CommandBuildContext p_237656_)
```

**Parameters:**

- `p_237656_` (`CommandBuildContext`)

**Returns:** `ArgumentBuilder<SharedSuggestionProvider, ?>`

### write

```java
public void write(FriendlyByteBuf p_237658_)
```

**Parameters:**

- `p_237658_` (`FriendlyByteBuf`)

### serializeCap

```java
 serializeCap()
```

**Returns:** ``

### serializeCap

```java
private static <A extends ArgumentType<?>> void serializeCap(FriendlyByteBuf p_237660_, ArgumentTypeInfo.Template<A> p_237661_)
```

**Parameters:**

- `p_237660_` (`FriendlyByteBuf`)
- `p_237661_` (`ArgumentTypeInfo.Template<A>`)

**Returns:** `private static <A extends ArgumentType<?>> void`

### serializeCap

```java
private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void serializeCap(FriendlyByteBuf p_237663_, ArgumentTypeInfo<A, T> p_237664_, ArgumentTypeInfo.Template<A> p_237665_)
```

**Parameters:**

- `p_237663_` (`FriendlyByteBuf`)
- `p_237664_` (`ArgumentTypeInfo<A, T>`)
- `p_237665_` (`ArgumentTypeInfo.Template<A>`)

**Returns:** `private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void`

### Entry

```java
 Entry(ClientboundCommandsPacket.NodeStub p_237668_, int p_237669_, int p_237670_, int[] p_237671_)
```

**Parameters:**

- `p_237668_` (`ClientboundCommandsPacket.NodeStub`)
- `p_237669_` (`int`)
- `p_237670_` (`int`)
- `p_237671_` (`int[]`)

**Returns:** ``

### write

```java
public void write(FriendlyByteBuf p_237675_)
```

**Parameters:**

- `p_237675_` (`FriendlyByteBuf`)

**Returns:** `public void`

### canBuild

```java
public boolean canBuild(IntSet p_237673_)
```

**Parameters:**

- `p_237673_` (`IntSet`)

**Returns:** `public boolean`

### canResolve

```java
public boolean canResolve(IntSet p_237677_)
```

**Parameters:**

- `p_237677_` (`IntSet`)

**Returns:** `public boolean`

### LiteralNodeStub

```java
 LiteralNodeStub(String p_237680_)
```

**Parameters:**

- `p_237680_` (`String`)

**Returns:** ``

### build

```java
public ArgumentBuilder<SharedSuggestionProvider, ?> build(CommandBuildContext p_237682_)
```

**Parameters:**

- `p_237682_` (`CommandBuildContext`)

**Returns:** `ArgumentBuilder<SharedSuggestionProvider, ?>`

### write

```java
public void write(FriendlyByteBuf p_237684_)
```

**Parameters:**

- `p_237684_` (`FriendlyByteBuf`)

### NodeResolver

```java
 NodeResolver(CommandBuildContext p_237689_, List<ClientboundCommandsPacket.Entry> p_237690_)
```

**Parameters:**

- `p_237689_` (`CommandBuildContext`)
- `p_237690_` (`List<ClientboundCommandsPacket.Entry>`)

**Returns:** ``

### resolve

```java
public CommandNode<SharedSuggestionProvider> resolve(int p_237692_)
```

**Parameters:**

- `p_237692_` (`int`)

**Returns:** `public CommandNode<SharedSuggestionProvider>`

### build

```java
ArgumentBuilder<SharedSuggestionProvider, ?> build(CommandBuildContext p_237695_)
```

**Parameters:**

- `p_237695_` (`CommandBuildContext`)

**Returns:** `ArgumentBuilder<SharedSuggestionProvider, ?>`

### write

```java
void write(FriendlyByteBuf p_237696_)
```

**Parameters:**

- `p_237696_` (`FriendlyByteBuf`)
