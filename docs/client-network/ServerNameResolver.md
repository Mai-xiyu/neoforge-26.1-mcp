# ServerNameResolver

**Package:** `net.minecraft.client.multiplayer.resolver`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT` | `ServerNameResolver` |  |

## Methods

### ServerNameResolver

```java
 ServerNameResolver(ServerAddressResolver p_171887_, ServerRedirectHandler p_171888_, AddressCheck p_171889_)
```

**Parameters:**

- `p_171887_` (`ServerAddressResolver`)
- `p_171888_` (`ServerRedirectHandler`)
- `p_171889_` (`AddressCheck`)

**Returns:** ``

### resolveAddress

```java
public Optional<ResolvedServerAddress> resolveAddress(ServerAddress p_171891_)
```

**Parameters:**

- `p_171891_` (`ServerAddress`)

**Returns:** `public Optional<ResolvedServerAddress>`
