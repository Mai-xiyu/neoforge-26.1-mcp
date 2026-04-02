# ServerRedirectHandler

**Package:** `net.minecraft.client.multiplayer.resolver`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### lookupRedirect

```java
Optional<ServerAddress> lookupRedirect(ServerAddress p_171902_)
```

**Parameters:**

- `p_171902_` (`ServerAddress`)

**Returns:** `Optional<ServerAddress>`

### createDnsSrvRedirectHandler

```java
static ServerRedirectHandler createDnsSrvRedirectHandler()
```

**Returns:** `static ServerRedirectHandler`
