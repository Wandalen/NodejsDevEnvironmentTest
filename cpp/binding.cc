#include <node.h>
#include <v8.h>

static void status( const v8::FunctionCallbackInfo<v8::Value>& args )
{
  v8::Isolate* isolate = args.GetIsolate();
  auto val = v8::Boolean::New( isolate, true );
  args.GetReturnValue().Set( val );
}

void Initialize( v8::Local<v8::Object> exports )
{
  NODE_SET_METHOD(exports, "status", status);
}

NODE_MODULE(Binding, Initialize );
