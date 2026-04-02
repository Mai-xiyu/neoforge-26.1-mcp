# NetworkComponentNegotiator

**Package:** `net.neoforged.neoforge.network.negotiation`
**Type:** class
**Annotations:** `@ApiStatus`

## Description

Negotiates the network components between the server and client.

## Methods

### negotiate

```java
public static NegotiationResult negotiate(List<NegotiableNetworkComponent> server, List<NegotiableNetworkComponent> client)
```

**Parameters:**

- `server` (`List<NegotiableNetworkComponent>`)
- `client` (`List<NegotiableNetworkComponent>`)

**Returns:** `NegotiationResult`

### NegotiationResult

```java
return new NegotiationResult()
```

**Returns:** `return new`

### validateComponent

```java
public static Optional<ComponentNegotiationResult> validateComponent(NegotiableNetworkComponent left, NegotiableNetworkComponent right, String requestingSide)
```

**Parameters:**

- `left` (`NegotiableNetworkComponent`)
- `right` (`NegotiableNetworkComponent`)
- `requestingSide` (`String`)

**Returns:** `Optional<ComponentNegotiationResult>`

### ComponentNegotiationResult

```java
public record ComponentNegotiationResult(boolean success, Component failureReason)
```

**Parameters:**

- `success` (`boolean`)
- `failureReason` (`Component`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ComponentNegotiationResult` | record |  |
