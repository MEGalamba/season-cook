// firebaseErrors.js
export function getFirebaseErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/weak-password":
      return "A password deve ter pelo menos 6 caracteres.";

    case "auth/email-already-in-use":
      return "Este email já está registado.";

    case "auth/invalid-email":
      return "Email inválido.";

    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Email ou password incorretos.";

    case "auth/network-request-failed":
      return "Problema de ligação à internet.";

    case "auth/too-many-requests":
      return "Demasiadas tentativas. Tenta mais tarde.";

    case "auth/user-disabled":
      return "Esta conta foi desativada.";

    case "auth/operation-not-allowed":
      return "Método de autenticação não permitido.";

    default:
      return "Ocorreu um erro inesperado. Tenta novamente.";
  }
}
