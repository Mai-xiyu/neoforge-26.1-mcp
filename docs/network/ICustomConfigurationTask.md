# ICustomConfigurationTask

**Package:** `net.neoforged.neoforge.network.configuration`
**Type:** interface
**Extends:** `ConfigurationTask`

## Description

Defines a custom configuration task that should be run when a client connects.



This interface is a wrapper functional interface around `ConfigurationTask`.
Allowing for easily sending custom payloads to the client, without having to perform the wrapping
in `ClientboundCustomPayloadPacket` yourself.

It is recommended to use this interface over `ConfigurationTask` when you need to send custom payloads.
It's functionality is otherwise identical.


## Methods

### run

```java
void run(Consumer<CustomPacketPayload> sender)
```

**Parameters:**

- `sender` (`Consumer<CustomPacketPayload>`)

### start

```java
.NonExtendable
    default void start(Consumer<Packet<?>> sender)
```

**Parameters:**

- `sender` (`Consumer<Packet<?>>`)

**Returns:** `.NonExtendable
    default void`

Defines a custom configuration task that should be run when a client connects.



This interface is a wrapper functional interface around `ConfigurationTask`.
Allowing for easily sending custom payloads to the client, without having to perform the wrapping
in `ClientboundCustomPayloadPacket` yourself.

It is recommended to use this interface over `ConfigurationTask` when you need to send custom payloads.
It's functionality is otherwise identical.

/
public interface ICustomConfigurationTask extends ConfigurationTask {
/**
Invoked when it is time for this configuration to run.
**sender**: A consumer that accepts a `CustomPacketPayload` to send to the client.
/
void run(Consumer<CustomPacketPayload> sender);
/**
Invoked when it is time for this configuration to run.
**sender**: A consumer that accepts a `Packet` to send to the client.
@implNote Please do not override this method, it is implemented to wrap the `CustomPacketPayload` in a `ClientboundCustomPayloadPacket`.
