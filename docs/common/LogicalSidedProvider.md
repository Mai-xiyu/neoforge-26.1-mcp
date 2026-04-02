# LogicalSidedProvider

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WORKQUEUE` | `LogicalSidedProvider<BlockableEventLoop<? super TickTask>>` |  |
| `CLIENTWORLD` | `LogicalSidedProvider<Optional<Level>>` |  |

## Methods

### setClient

```java
INTERNAL, DO  NOT CALL
    public static void setClient(Supplier<Minecraft> client)
```

**Parameters:**

- `client` (`Supplier<Minecraft>`)

**Returns:** `INTERNAL, DO  NOT CALL
    public static void`

### setServer

```java
public static void setServer(Supplier<MinecraftServer> server)
```

**Parameters:**

- `server` (`Supplier<MinecraftServer>`)

**Returns:** `public static void`

### LogicalSidedProvider

```java
private LogicalSidedProvider(Function<Supplier<Minecraft>, T> clientSide, Function<Supplier<MinecraftServer>, T> serverSide)
```

**Parameters:**

- `clientSide` (`Function<Supplier<Minecraft>, T>`)
- `serverSide` (`Function<Supplier<MinecraftServer>, T>`)

**Returns:** `private`

### get

```java
public T get(LogicalSide side)
```

**Parameters:**

- `side` (`LogicalSide`)

**Returns:** `public T`
