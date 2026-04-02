# CommandEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

CommandEvent is fired after a command is parsed, but before it is executed.
This event is fired during the invocation of `Commands#performCommand(ParseResults, String)`.



This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the command will not be executed.



This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `parseResults` | `ParseResults<CommandSourceStack>` |  |
| `exception` | `Throwable` |  |

## Accessors

- `public ParseResults<CommandSourceStack> getParseResults()` 
- `public void setParseResults(ParseResults<CommandSourceStack> parse)` 
- `public Throwable getException()` 
- `public void setException(Throwable exception)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CommandHandler {
    @SubscribeEvent
    public static void onCommand(CommandEvent event) {
        // Handle event
    }
}
```
