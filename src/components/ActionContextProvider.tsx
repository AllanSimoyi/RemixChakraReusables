import { createContext, useContext } from "react";
import { BaseActionData, Result } from "../lib";

type ContextProps<SuccessData = any, ActionData = any> = (Result<SuccessData, ActionData> | undefined) & {
  isSubmitting: boolean;
}

export const ActionContext = createContext<ContextProps | undefined>(undefined);

type Props<Ok, Err> = ContextProps<Ok, Err> & {
  children: React.ReactNode;
}
export function ActionContextProvider<Ok, Err> (props: Props<Ok, Err>) {
  const { children, ...restOfProps } = props;
  return (
    <ActionContext.Provider value={restOfProps}>
      {children}
    </ActionContext.Provider>
  )
}

export function useActionContext<Ok, Err> () {
  const context = useContext<ContextProps<Ok, Err> | undefined>(ActionContext);
  if (!context) {
    throw new Error(`useActionContext must be used within an ActionContextProvider`);
  }
  return context;
}

export function useField<FieldDataType = any> (name: string) {
  const contextData = useActionContext<any, BaseActionData>();

  if (contextData.success) {
    return {
      value: undefined,
      error: undefined,
    }
  }
  return {
    value: contextData.err?.fields?.[name] as FieldDataType,
    error: contextData.err?.fieldErrors?.[name]
  }
}

export function useFormError () {
  const contextData = useActionContext<any, BaseActionData>();

  if (contextData.success) {
    return undefined;
  }
  return contextData.err?.formError;
}

export function useIsSubmitting () {
  const { isSubmitting } = useActionContext<any, any>();
  return isSubmitting;
}